// Sections fade up gently as they scroll into view. Purely additive: the
// hidden starting state is only applied once this script has run, so without
// JS (or under prefers-reduced-motion) everything is simply visible.
document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(
    [
      ".about-main > h2",
      ".theme-row",
      ".photo-strip-item",
      ".affiliation",
      ".about-main ol.bibliography > li",
      ".gallery-item",
      ".gallery-year",
    ].join(",")
  );
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    function (seen) {
      seen.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach(function (el) {
    // Stagger siblings (theme rows, photos) so they arrive one after another.
    if (el.matches(".theme-row, .photo-strip-item")) {
      const i = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.transitionDelay = (i % 4) * 90 + "ms";
    }
    el.classList.add("reveal");
    observer.observe(el);
  });
});
