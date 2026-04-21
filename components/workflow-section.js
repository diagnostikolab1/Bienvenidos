(function () {
  if (customElements.get("workflow-section")) {
    return;
  }

  class WorkflowSection extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="section workflow" id="proceso">
          <div class="container">
            <header class="section-head reveal">
              <div>
                <span class="eyebrow">Metodo de atencion</span>
                <h2>Proceso clinico claro, seguro y trazable</h2>
                <p>Desde el registro del paciente hasta la entrega final, cada etapa tiene control de calidad y supervision profesional.</p>
              </div>
            </header>

            <div class="timeline">
              <article class="timeline-step reveal">
                <span class="step-index">1</span>
                <h3>Registro medico</h3>
                <p>Validamos orden clinica, antecedentes y condiciones de preparacion antes de la toma de muestra.</p>
              </article>

              <article class="timeline-step reveal">
                <span class="step-index">2</span>
                <h3>Toma y cadena de custodia</h3>
                <p>Protocolos de bioseguridad, etiquetado digital y traslado controlado para conservar la integridad de la muestra.</p>
              </article>

              <article class="timeline-step reveal">
                <span class="step-index">3</span>
                <h3>Analisis y validacion</h3>
                <p>Equipos calibrados, controles internos y revision de resultados por personal especializado.</p>
              </article>

              <article class="timeline-step reveal">
                <span class="step-index">4</span>
                <h3>Entrega y seguimiento</h3>
                <p>Resultados digitales y soporte para seguimiento clinico en coordinacion con tu medico tratante.</p>
              </article>
            </div>
          </div>
        </section>
      `;
    }
  }

  customElements.define("workflow-section", WorkflowSection);
})();
