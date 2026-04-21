(function () {
  if (customElements.get("contact-section")) {
    return;
  }

  class ContactSection extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="section contact" id="contacto">
          <div class="container contact-grid">
            <article class="contact-info reveal">
              <span class="eyebrow">Atencion inmediata</span>
              <h2>Agenda tu estudio clinico</h2>
              <p>Atencion presencial y domiciliaria. Nuestro equipo confirma tu solicitud en minutos.</p>
              <ul>
                <li><strong>Telefono</strong><span>+591 700 00000</span></li>
                <li><strong>Direccion</strong><span>Av. Salud 120, Centro Clinico</span></li>
                <li><strong>Email</strong><span>contacto@diagnostico-lab.com</span></li>
                <li><strong>Horario</strong><span>Lunes a Sabado, 07:00 - 20:00</span></li>
              </ul>
            </article>

            <article class="contact-form-wrap reveal">
              <h3>Solicitud rapida</h3>
              <form id="bookingForm" class="contact-form" novalidate>
                <label>
                  <span>Nombre completo</span>
                  <input type="text" name="name" placeholder="Ej: Ana Rojas" required>
                </label>
                <label>
                  <span>Telefono</span>
                  <input type="tel" name="phone" placeholder="Ej: 70012345" required>
                </label>
                <label>
                  <span>Correo</span>
                  <input type="email" name="email" placeholder="Ej: nombre@correo.com">
                </label>
                <label>
                  <span>Tipo de estudio</span>
                  <select name="test" required>
                    <option value="">Selecciona una opcion</option>
                    <option>Analisis de rutina</option>
                    <option>Panel hormonal</option>
                    <option>Inmunologia</option>
                    <option>Domicilio programado</option>
                  </select>
                </label>
                <label>
                  <span>Fecha sugerida</span>
                  <input type="date" name="date" required>
                </label>
                <label>
                  <span>Notas adicionales</span>
                  <textarea name="notes" placeholder="Comparte indicaciones o referencias medicas"></textarea>
                </label>
                <button class="btn btn-primary" type="submit">Enviar solicitud</button>
                <p class="form-note" id="formMessage" role="status" aria-live="polite"></p>
              </form>
            </article>
          </div>
        </section>
      `;
    }
  }

  customElements.define("contact-section", ContactSection);
})();
