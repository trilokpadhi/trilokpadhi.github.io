// Typewriter rotation for the hero headline.
// Markup: <span class="rotate" data-words="one|two|three">one</span>
// Entries come from the data-words attribute so the copy stays in the page
// (about.md builds it from the hero_phrases front matter).
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".rotate[data-words]").forEach(function (el) {
    const words = el.dataset.words.split("|").filter(Boolean);
    if (words.length < 2) return;

    // Optional per-entry links, index-aligned with the words. An empty slot
    // means that entry has no link and the link line stays hidden for it.
    const links = (el.dataset.links || "").split("|");
    const linkTexts = (el.dataset.linkTexts || "").split("|");
    const linkEl = document.querySelector(".hero-link");

    const showLink = function (i) {
      if (!linkEl) return;
      if (links[i]) {
        linkEl.href = links[i];
        linkEl.textContent = linkTexts[i] || "Read more";
        linkEl.classList.add("is-shown");
        linkEl.removeAttribute("tabindex");
      } else {
        hideLink();
      }
    };
    const hideLink = function () {
      if (!linkEl) return;
      linkEl.classList.remove("is-shown");
      linkEl.setAttribute("tabindex", "-1"); // not focusable while invisible
    };

    // The headline is as tall as the current phrase. Pin the wrapper to the
    // live line's height after every change so a change in line count eases
    // (CSS transition on .rotate-stack) rather than jolting the page below.
    const stack = el.closest(".rotate-stack");
    const live = el.closest(".rotate-live");
    const fit = function () {
      if (stack && live) stack.style.height = live.offsetHeight + "px";
    };

    // Anyone who has asked for less motion gets the first entry and its link,
    // without the typing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Re-fit whenever the live line changes size for any reason: the web font
    // arriving (the fallback is wider and can wrap to an extra line), a window
    // resize, or a phrase gaining or losing a line as it types.
    fit();
    if ("ResizeObserver" in window && live) new ResizeObserver(fit).observe(live);
    else window.addEventListener("resize", fit, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

    const TYPE = 45; // ms per character typed
    const ERASE = 22; // ms per character erased
    // A whole question needs longer on screen than a single word did, and
    // longer still when there is a link under it to read and click.
    const HOLD = Number(el.dataset.hold) || 3600;
    const HOLD_LINKED = HOLD + 1600;
    let index = 0;
    let chars = words[0].length;
    let erasing = true;
    let paused = false;

    // Hovering or focusing the link holds the current question, so it cannot
    // be erased out from under someone about to click it.
    if (linkEl) {
      ["mouseenter", "focus"].forEach((e) => linkEl.addEventListener(e, () => (paused = true)));
      ["mouseleave", "blur"].forEach((e) => linkEl.addEventListener(e, () => (paused = false)));
    }

    const tick = function () {
      if (paused) {
        setTimeout(tick, 400);
        return;
      }
      const word = words[index];
      if (erasing) {
        if (chars === word.length) hideLink();
        chars -= 1;
        if (chars <= 0) {
          erasing = false;
          index = (index + 1) % words.length;
        }
      } else {
        chars += 1;
        if (chars >= word.length) {
          erasing = true;
          el.textContent = word;
          fit();
          showLink(index);
          setTimeout(tick, links[index] ? HOLD_LINKED : HOLD);
          return;
        }
      }
      el.textContent = words[index].slice(0, Math.max(chars, 0));
      fit();
      setTimeout(tick, erasing ? ERASE : TYPE);
    };

    // The first entry arrives already typed (server-rendered), so give it the
    // same time on screen as the rest before erasing it.
    setTimeout(tick, links[0] ? HOLD_LINKED : HOLD);
  });
});

// Fade the hero banner out as it scrolls away. Done in JS rather than with a
// scroll-driven CSS animation because animation-timeline is still absent from
// Safari, and this is small enough not to warrant a fallback path.
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".page-banner");
  if (!banner) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  const update = function () {
    const height = banner.offsetHeight || 1;
    // Fully opaque at the top, gone by the time the banner has scrolled past.
    const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
    banner.style.opacity = String(1 - progress * 0.95);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    },
    { passive: true }
  );

  update();
});
