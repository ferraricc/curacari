// Curacari — site behaviour (vanilla JS, no jQuery).
// Runs after partials.js has injected the nav + footer.
(function () {
  "use strict";

  /* ---- Mobile menu toggle ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after tapping a link.
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Sticky nav shadow + back-to-top visibility ---- */
  var nav = document.getElementById("siteNav");
  var toTop = document.getElementById("backToTop");
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("scrolled", y > 20);
    if (toTop) toTop.classList.toggle("show", y > 400);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Project category filters (Progetti page) ---- */
  var filterBar = document.getElementById("projectFilters");
  if (filterBar) {
    var cards = document.querySelectorAll("[data-project]");
    filterBar.querySelectorAll(".filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        filterBar.querySelectorAll(".filter-chip").forEach(function (c) {
          c.classList.remove("active");
        });
        chip.classList.add("active");
        var cat = chip.getAttribute("data-filter");
        cards.forEach(function (card) {
          var show = cat === "all" || card.getAttribute("data-project") === cat;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---- Copy-to-clipboard (Donazioni page) ---- */
  window.copyText = function (text, btn) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(function () {
      var original = btn.innerHTML;
      btn.innerHTML = '<i class="fa fa-check" style="margin-right:6px;"></i>Copiato!';
      btn.classList.add("copied");
      setTimeout(function () {
        btn.innerHTML = original;
        btn.classList.remove("copied");
      }, 2000);
    });
  };

  /* ---- Contact form via EmailJS (index + contact pages) ---- */
  var form = document.getElementById("form");
  if (form && window.emailjs) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.classList.contains("was-validated")) form.classList.add("was-validated");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Invio…"; }
      emailjs.sendForm("service_liczalh", "template_ur7ooxr", form).then(
        function () {
          alert("Messaggio inviato con successo!");
          window.location.href = "index.html";
        },
        function () {
          alert("Si è verificato un errore nell'invio. Riprova o scrivici a curacariaps@gmail.com.");
          if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Invia"; }
        }
      );
    });
  }
})();
