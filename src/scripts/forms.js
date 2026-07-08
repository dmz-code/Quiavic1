document.addEventListener('DOMContentLoaded', () => {

  // 🔹 seleccionar botones y secciones
  const tabs = document.querySelectorAll('.benefit');
  const sections = document.querySelectorAll('.form-section');

  // 🔹 cambio de tabs (mostrar formularios)
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      // activar botón
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // mostrar sección correcta
      sections.forEach(section => {
        section.classList.toggle(
          'active',
          section.dataset.form === tab.dataset.target
        );
      });

    });
  });

});