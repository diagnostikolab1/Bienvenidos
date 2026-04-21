(function () {
  if (customElements.get("hero-section")) {
    return;
  }

  class HeroSection extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="hero hero-intro" id="hero">
          <div class="hero-media" data-parallax-media aria-hidden="true">
            <img src="ChatGPT Image 18 abr 2026, 04_17_46 p.m..png" alt="">
          </div>
          <div class="hero-shade" aria-hidden="true"></div>

          <div class="container hero-content">
            <div class="hero-panel reveal">
              <span class="eyebrow intro-eyebrow">Atencion clinica de precision</span>
              <h1>Resultados confiables para decisiones medicas oportunas.</h1>
              <p>
                Analisis clinicos con estandares de calidad, bioseguridad y tecnologia para dar respuestas claras
                en el momento que tu salud lo necesita.
              </p>

              <div class="hero-phrases">
                <span>Diagnostico oportuno</span>
                <span>Calidad validada</span>
                <span>Atencion humana</span>
              </div>

              <div class="hero-actions">
                <a class="btn btn-primary" href="#contacto">Solicitar turno</a>
                <a class="btn btn-hero-alt" href="#servicios">Ver servicios</a>
              </div>

              <div class="hero-status" role="status" aria-live="polite">
                <span class="dot"></span>
                Atencion activa hoy 07:00 - 20:00
              </div>

              <div class="hero-scroll-cue">Desliza para conocer mas</div>
            </div>
          </div>
        </section>

        <section class="section hero-overview" aria-label="Resumen rapido">
          <div class="container">
            <div class="metrics hero-metrics">
              <article class="metric reveal">
                <strong data-count="24">0</strong>
                <span>horas maximas de entrega</span>
              </article>
              <article class="metric reveal">
                <strong data-count="98">0</strong>
                <span>% de satisfaccion anual</span>
              </article>
              <article class="metric reveal">
                <strong data-count="150">0</strong>
                <span>tipos de pruebas clinicas</span>
              </article>
            </div>
          </div>
        </section>
      `;
    }
  }

  customElements.define("hero-section", HeroSection);
})();
