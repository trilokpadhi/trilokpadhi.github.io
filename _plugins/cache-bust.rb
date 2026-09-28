# based on https://distresssignal.org/busting-css-cache-with-jekyll-md5-hash
# https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    class CacheDigester
      require 'digest/md5'
      require 'pathname'

      attr_accessor :file_name, :directory

      def initialize(file_name:, directory: nil)
        self.file_name = file_name
        self.directory = directory
      end

      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      def directory_files_content
        # Sorted so the digest does not depend on filesystem enumeration order,
        # which differs between a local machine and the CI runner and would
        # otherwise make the hash flap between builds.
        Array(directory).flat_map do |dir|
          Dir[File.join(dir, '**', '*')].sort.map { |f| File.read(f) unless File.directory?(f) }
        end.join
      end

      def file_content
        local_file_name = file_name.slice((file_name.index('assets/')..-1))
        File.read(local_file_name)
      end

      def file_contents
        is_directory? ? file_content : directory_files_content
      end

      def is_directory?
        directory.nil?
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: nil).digest!
    end

    def bust_css_cache(file_name)
      # Upstream points this at 'assets/_sass', which does not exist in this
      # theme: the partials live in _sass/ and the entrypoint in assets/css/.
      # Globbing a missing directory yields an empty string, so every build
      # emitted MD5("") = d41d8cd98f00b204e9800998ecf8427e and the stylesheet
      # URL never changed. Browsers therefore kept serving a stale sheet after
      # any CSS edit, with no way to know it had changed.
      CacheDigester.new(file_name: file_name, directory: ['_sass', 'assets/css']).digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)