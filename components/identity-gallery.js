(function () {
  if (customElements.get("identity-gallery")) {
    return;
  }

  class IdentityGallery extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="section gallery" id="galeria">
          <div class="container">
            <header class="section-head reveal">
              <div>
                <span class="eyebrow">Visual creativo</span>
                <h2>Datos clinicos representados con iconos y SVG</h2>
                <p>
                  Eliminamos imagenes repetidas y usamos recursos graficos vectoriales para mostrar procesos, control y calidad.
                </p>
              </div>
            </header>

            <div class="gallery-layout">
              <article class="gallery-card creative-card gallery-main reveal">
                <span class="creative-tag">Laboratorio digital</span>
                <svg class="creative-svg main-svg" viewBox="0 0 520 280" role="img" aria-label="Panel de monitoreo clinico">
                  <defs>
                    <linearGradient id="gradMainA" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#18c2df" />
                      <stop offset="100%" stop-color="#73e4f4" />
                    </linearGradient>
                    <linearGradient id="gradMainB" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#1a3950" />
                      <stop offset="100%" stop-color="#0f2a3b" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="10" width="504" height="260" rx="18" fill="url(#gradMainB)" stroke="rgba(190,235,245,0.34)" />
                  <rect x="28" y="36" width="155" height="92" rx="12" fill="#12374d" />
                  <rect x="196" y="36" width="296" height="92" rx="12" fill="#12374d" />
                  <rect x="28" y="140" width="464" height="108" rx="12" fill="#12374d" />
                  <path class="pulse-line" d="M40 196 L104 192 L156 210 L212 176 L270 186 L328 160 L380 170 L442 148 L484 158" fill="none" stroke="url(#gradMainA)" stroke-width="6" stroke-linecap="round" />
                  <circle class="pulse-dot" cx="442" cy="148" r="8" fill="#8af4ff" />
                  <circle class="pulse-dot" cx="484" cy="158" r="7" fill="#8af4ff" />
                </svg>
                <p class="creative-copy">Control de muestras en tiempo real con validacion automatizada y seguimiento medico integrado.</p>
              </article>

              <article class="gallery-card creative-card gallery-side reveal">
                <span class="creative-tag">Monitoreo continuo</span>
                <div class="badge-row">
                  <span class="badge">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5 8 14l8-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    QC diario
                  </span>
                  <span class="badge">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="10" r="2" fill="currentColor"/></svg>
                    Trazabilidad
                  </span>
                </div>
                <svg class="creative-svg signal-svg" viewBox="0 0 420 120" role="img" aria-label="Indicador de senal de procesos">
                  <rect x="6" y="8" width="408" height="104" rx="14" fill="#103447" />
                  <path class="pulse-line" d="M24 74 L76 68 L118 78 L160 56 L206 62 L250 46 L300 52 L348 34 L396 40" fill="none" stroke="#43d6ee" stroke-width="4" stroke-linecap="round" />
                </svg>
              </article>

              <article class="info-card trust-card reveal">
                <h3>Estandares que respaldan cada resultado</h3>
                <ul class="info-list">
                  <li>Control interno diario en equipos de analisis.</li>
                  <li>Trazabilidad digital desde la toma hasta el reporte.</li>
                  <li>Protocolos de bioseguridad por area critica.</li>
                  <li>Validacion profesional antes de cada entrega.</li>
                </ul>
              </article>

              <article class="gallery-card creative-card gallery-bottom reveal">
                <span class="creative-tag">Ruta de muestra</span>
                <div class="flow-steps">
                  <span>Registro</span>
                  <span>Toma</span>
                  <span>Analisis</span>
                  <span>Reporte</span>
                </div>
                <svg class="creative-svg flow-svg" viewBox="0 0 420 130" role="img" aria-label="Flujo de proceso clinico">
                  <rect x="8" y="18" width="404" height="94" rx="18" fill="#103447" />
                  <path d="M42 66 H378" stroke="#2bc9e4" stroke-width="6" stroke-linecap="round" />
                  <circle class="pulse-dot" cx="72" cy="66" r="10" fill="#86f2ff" />
                  <circle class="pulse-dot" cx="170" cy="66" r="10" fill="#86f2ff" />
                  <circle class="pulse-dot" cx="266" cy="66" r="10" fill="#86f2ff" />
                  <circle class="pulse-dot" cx="352" cy="66" r="10" fill="#86f2ff" />
                </svg>
              </article>
            </div>
          </div>
        </section>
      `;
    }
  }

  customElements.define("identity-gallery", IdentityGallery);
})();
