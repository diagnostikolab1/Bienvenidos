(function () {
  if (customElements.get("services-section")) {
    return;
  }

  class ServicesSection extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="section services" id="servicios">
          <div class="container">
            <header class="section-head reveal">
              <div>
                <span class="eyebrow">Cobertura integral</span>
                <h2>Servicios para control preventivo y diagnostico avanzado</h2>
                <p>
                  Cada paquete combina exactitud analitica, protocolos de bioseguridad y reporte medico estructurado.
                </p>
              </div>
            </header>

            <div class="cards-grid">
              <article class="service-card reveal" data-spotlight>
                <div class="service-icon">A1</div>
                <h3>Analisis de rutina</h3>
                <p>Hemograma, glucosa, perfil lipidico, funcion renal y pruebas basicas con entrega digital en 24 horas.</p>
              </article>

              <article class="service-card reveal" data-spotlight>
                <div class="service-icon">B2</div>
                <h3>Panel hormonal</h3>
                <p>Estudios de tiroides, hormonas reproductivas y seguimiento endocrino con interpretacion profesional.</p>
              </article>

              <article class="service-card reveal" data-spotlight>
                <div class="service-icon">C3</div>
                <h3>Inmunologia clinica</h3>
                <p>Pruebas de inflamacion, autoinmunidad y perfiles inmunologicos para apoyo diagnostico especializado.</p>
              </article>

              <article class="service-card reveal" data-spotlight>
                <div class="service-icon">D4</div>
                <h3>Microbiologia</h3>
                <p>Cultivos y antibiogramas con trazabilidad total para orientar tratamientos de manera responsable.</p>
              </article>

              <article class="service-card reveal" data-spotlight>
                <div class="service-icon">E5</div>
                <h3>Domicilio programado</h3>
                <p>Toma de muestras en casa con cadena de frio, bioseguridad y seguimiento de resultados en linea.</p>
              </article>

              <article class="service-card reveal" data-spotlight>
                <div class="service-icon">F6</div>
                <h3>Checkup empresarial</h3>
                <p>Jornadas para equipos de trabajo con reportes por area, indicadores y soporte para medicina ocupacional.</p>
              </article>
            </div>
          </div>
        </section>
      `;
    }
  }

  customElements.define("services-section", ServicesSection);
})();
