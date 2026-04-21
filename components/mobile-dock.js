(function () {
  if (customElements.get("mobile-dock")) {
    return;
  }

  class MobileDock extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="mobile-dock" aria-label="Navegacion rapida movil">
          <a data-nav-link href="#inicio" class="dock-item"><span>Inicio</span></a>
          <a data-nav-link href="#servicios" class="dock-item"><span>Servicios</span></a>
          <a data-nav-link href="#proceso" class="dock-item"><span>Proceso</span></a>
          <a data-nav-link href="#contacto" class="dock-item dock-item-accent"><span>Cita</span></a>
          <button type="button" class="dock-item dock-theme" data-theme-toggle aria-label="Cambiar tema">
            <span>Tema</span>
          </button>
        </nav>
      `;
    }
  }

  customElements.define("mobile-dock", MobileDock);
})();
