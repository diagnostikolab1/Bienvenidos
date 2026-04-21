(function () {
  if (customElements.get("site-footer")) {
    return;
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      var year = new Date().getFullYear();
      this.innerHTML = `
        <footer class="site-footer">
          <div class="container footer-inner">
            <p>Diagnostico Laboratorio de Analisis Clinicos</p>
            <small>Calidad analitica, precision y atencion humana | ${year}</small>
          </div>
        </footer>
      `;
    }
  }

  customElements.define("site-footer", SiteFooter);
})();
