(function () {
  if (customElements.get("site-header")) {
    return;
  }

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="topbar" id="inicio">
          <div class="progress-track" aria-hidden="true">
            <span class="progress-bar" id="scrollProgress"></span>
          </div>
          <div class="container topbar-inner">
            <a class="brand" href="#inicio" aria-label="Ir al inicio">
              <span class="brand-badge" aria-hidden="true">DX</span>
              <span class="brand-copy">
                Diagnostico
                <small>Laboratorio Clinico</small>
              </span>
            </a>

            <nav class="menu desktop-nav" aria-label="Navegacion principal">
              <a data-nav-link href="#servicios">Servicios</a>
              <a data-nav-link href="#galeria">Identidad</a>
              <a data-nav-link href="#proceso">Proceso</a>
              <a data-nav-link href="#contacto">Contacto</a>
            </nav>

            <div class="header-actions">
              <button class="theme-toggle" type="button" data-theme-toggle aria-label="Cambiar tema">
                <span class="theme-toggle-icon" aria-hidden="true"></span>
                <span class="theme-toggle-label">Modo oscuro</span>
              </button>
              <a class="btn btn-primary desktop-cta" href="#contacto">Agendar</a>
              <button class="menu-toggle" type="button" data-menu-toggle aria-label="Abrir menu" aria-expanded="false" aria-controls="mobilePanel">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </header>

        <aside class="mobile-panel" id="mobilePanel" aria-hidden="true">
          <div class="mobile-panel-head">
            <strong>Navegacion</strong>
            <button class="mobile-close" type="button" data-menu-close aria-label="Cerrar menu">Cerrar</button>
          </div>
          <nav class="mobile-nav" aria-label="Navegacion movil">
            <a data-nav-link href="#servicios">Servicios</a>
            <a data-nav-link href="#galeria">Identidad</a>
            <a data-nav-link href="#proceso">Proceso</a>
            <a data-nav-link href="#contacto">Contacto</a>
          </nav>
          <a class="btn btn-primary btn-block" href="#contacto" data-nav-link>Reservar cita</a>
        </aside>

        <button class="mobile-overlay" type="button" data-overlay hidden aria-label="Cerrar menu"></button>
      `;
    }
  }

  customElements.define("site-header", SiteHeader);
})();
