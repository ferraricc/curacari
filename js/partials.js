// Shared header + footer, injected once per page so they stay in sync.
// insertAdjacentHTML is used (not innerHTML =) so existing DOM nodes are never
// destroyed/rebuilt — this avoids mid-rebuild rendering glitches on mobile Safari/Chrome.

const header = `
<nav class="site-nav" id="siteNav">
  <div class="nav-inner">
    <a href="index.html" class="brand" aria-label="Curacari — home">
      <img src="img/curacari_logo.png" alt="Curacari">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Apri menu" aria-expanded="false">
      <i class="fa fa-bars"></i>
    </button>
    <div class="nav-links" id="navLinks">
      <a href="team.html">Chi siamo</a>
      <a href="about.html">Cosa facciamo</a>
      <a href="testimonianze.html">Progetti</a>
      <a href="contact.html">Contatti</a>
      <a href="donation.html" class="nav-cta-mobile">Dona ora ♥</a>
    </div>
    <a href="donation.html" class="nav-cta">Dona ora ♥</a>
  </div>
</nav>
`;

const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-cols">
      <div class="col">
        <h3>Come puoi contattarci</h3>
        <p><i class="fa fa-phone-alt" style="margin-right:10px;"></i><a href="tel:+393534618282">+39 353 4618282</a></p>
        <p><i class="fa fa-envelope" style="margin-right:10px;"></i><a href="mailto:curacariaps@gmail.com">curacariaps@gmail.com</a></p>
        <p><i class="fa fa-map-marker-alt" style="margin-right:10px;"></i>Via Cappella 99, 41053 Gorzano</p>
        <div class="footer-social">
          <a href="https://www.instagram.com/curacari" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=61561046382803" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/curacariaps" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@CuracariAPS" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="col">
        <h3>Collegamenti rapidi</h3>
        <p><a href="team.html">Chi Siamo</a></p>
        <p><a href="about.html">Cosa facciamo</a></p>
        <p><a href="testimonianze.html">Progetti</a></p>
        <p><a href="donation.html">Donazioni</a></p>
        <p><a href="contact.html">Contatti</a></p>
      </div>
      <div class="col">
        <h3>Riconoscimenti</h3>
        <p class="footer-recog">Curacari APS è riconosciuta dalla <a href="https://www.regione.emilia-romagna.it/caregiver/mappe/associazioni-caregiver/associazioni-modena/curacari-aps" target="_blank" rel="noopener">Regione Emilia-Romagna</a> come associazione caregiver sul territorio di Modena.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© Curacari.org — Tutti i diritti riservati.</span>
      <span class="foot-links"><a href="index.html">Home</a><a href="contact.html">Contatti</a></span>
    </div>
  </div>
</footer>
<button class="back-to-top" id="backToTop" aria-label="Torna su"><i class="fa fa-arrow-up"></i></button>
`;

const container = document.querySelector("#maincontainer");
container.insertAdjacentHTML("afterbegin", header);
container.insertAdjacentHTML("beforeend", footer);

// Highlight the active nav link based on the current file name.
(function () {
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#navLinks a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
})();
