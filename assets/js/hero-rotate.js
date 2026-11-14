// Typewriter rotation for the hero headline.
// Markup: <span class="rotate" data-words="one|two|three">one</span>
// Entries come from the data-words attribute so the copy stays in the page
// (about.md builds it from the hero_questions front matter).
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".rotate[data-words]").forEach(function (el) {
    const words = el.dataset.words.split("|").filter(Boolean);
    if (words.length < 2) return;

    // Height is reserved in CSS (.rotate-stack), not here: every entry is
    // rendered invisibly in the same grid cell, so the block below never jumps.

    // Anyone who has asked for less motion gets the words without the typing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const TYPE = 55; // ms per character typed
    const ERASE = 30; // ms per character erased
    // A whole question needs longer on screen than a single word did.
    const HOLD = Number(el.dataset.hold) || 3600; // ms a complete entry stays up
    let index = 0;
    let chars = words[0].length;
    let erasing = true;

    (function tick() {
      const word = words[index];
      if (erasing) {
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
          setTimeout(tick, HOLD);
          return;
        }
      }
      el.textContent = words[index].slice(0, Math.max(chars, 0));
      setTimeout(tick, erasing ? ERASE : TYPE);
    })();
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
