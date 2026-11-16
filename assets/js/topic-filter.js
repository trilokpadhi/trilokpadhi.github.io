// One-click topic filters for the publications page (_includes/topic_filters.liquid).
// Each chip carries the BibTeX keys of its papers; jekyll-scholar renders each
// entry with its key as an element id, which is what we match on. The active
// topic lives in ?topic=<key> so filtered views can be linked to, e.g. from the
// homepage research cards and hero questions.
document.addEventListener("DOMContentLoaded", function () {
  const chips = Array.from(document.querySelectorAll(".topic-chip"));
  if (!chips.length) return;

  const entries = Array.from(document.querySelectorAll(".publications ol.bibliography > li"));

  // Hide a year heading (and its list) when nothing under it is visible, either
  // because of the topic or because of the text search beside it.
  const syncHeadings = function () {
    document.querySelectorAll(".publications h2.bibliography").forEach(function (h) {
      const ol = h.nextElementSibling;
      if (!ol || ol.tagName !== "OL") return;
      const anyVisible = Array.from(ol.children).some((li) => !li.classList.contains("topic-hidden") && !li.classList.contains("unloaded"));
      h.classList.toggle("topic-hidden", !anyVisible);
      ol.classList.toggle("topic-hidden", !anyVisible);
    });
  };

  const apply = function (topic, updateUrl) {
    let chip = chips.find((c) => c.dataset.topic === topic) || chips[0];
    const keys = chip.dataset.papers ? chip.dataset.papers.split(" ") : null;

    chips.forEach(function (c) {
      const on = c === chip;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });

    entries.forEach(function (li) {
      const match = !keys || keys.some((k) => li.querySelector("#" + CSS.escape(k)));
      li.classList.toggle("topic-hidden", !match);
    });
    syncHeadings();

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (chip.dataset.topic) url.searchParams.set("topic", chip.dataset.topic);
      else url.searchParams.delete("topic");
      history.replaceState(null, "", url);
    }
  };

  chips.forEach((c) => c.addEventListener("click", () => apply(c.dataset.topic, true)));

  // The text search re-shows year headings based on its own matches only; run
  // after it so a heading with no topic matches stays hidden.
  const search = document.getElementById("bibsearch");
  if (search) search.addEventListener("input", () => setTimeout(syncHeadings, 0));
  window.addEventListener("hashchange", () => setTimeout(syncHeadings, 0));

  apply(new URLSearchParams(window.location.search).get("topic") || "", false);
});
