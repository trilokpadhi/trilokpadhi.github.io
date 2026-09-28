// Typewriter rotation for the hero headline.
// Markup: <em class="rotate" data-words="one|two|three">one</em>
// Words come from the data-words attribute so the copy stays in the page.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".rotate[data-words]").forEach(function (el) {
    const words = el.dataset.words.split("|").filter(Boolean);
    if (words.length < 2) return;

    // No width reservation here. Reserving the longest word's box strands the
    // trailing full stop several centimetres to the right while a short word
    // like "grounded" is showing; these words differ too much in length for
    // that trick. Letting the line reflow is what a typewriter does anyway.

    // Anyone who has asked for less motion gets the words without the typing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const TYPE = 55; // ms per character typed
    const ERASE = 30; // ms per character erased
    const HOLD = 2200; // ms a complete word stays up
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
