(function () {
  var KEY = "hsnlsn-theme";
  var root = document.documentElement;
  var stored = null;

  try {
    stored = localStorage.getItem(KEY);
  } catch (error) {
    stored = null;
  }

  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function effectiveTheme() {
    if (stored === "light" || stored === "dark") return stored;
    return media.matches ? "dark" : "light";
  }

  root.setAttribute("data-theme", effectiveTheme());
  root.setAttribute("data-bs-theme", effectiveTheme());

  var MOON =
    '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  var SUN =
    '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  function sync(button) {
    var dark = root.getAttribute("data-theme") === "dark";
    var turkish = (root.lang || "tr").toLowerCase().indexOf("tr") === 0;
    var label = turkish
      ? dark ? "Açık temaya geç" : "Koyu temaya geç"
      : dark ? "Switch to light theme" : "Switch to dark theme";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header-inner");
    var button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.innerHTML = MOON + SUN;

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      root.setAttribute("data-bs-theme", next);
      stored = next;
      try {
        localStorage.setItem(KEY, next);
      } catch (error) {
        /* storage kapalıysa tema yalnızca bu sayfada geçerli olur */
      }
      sync(button);
    });

    var nav = document.querySelector(".header-nav");
    var langSwitch = nav ? nav.querySelector(".lang-switch") : null;
    if (nav && langSwitch) {
      nav.insertBefore(button, langSwitch);
    } else if (nav) {
      nav.appendChild(button);
    } else if (header) {
      header.appendChild(button);
    } else {
      button.classList.add("is-floating");
      document.body.appendChild(button);
    }

    sync(button);
  });

  media.addEventListener("change", function (event) {
    if (stored === "light" || stored === "dark") return;
    root.setAttribute("data-theme", event.matches ? "dark" : "light");
    root.setAttribute("data-bs-theme", event.matches ? "dark" : "light");
    var button = document.querySelector(".theme-toggle");
    if (button) sync(button);
  });
})();
