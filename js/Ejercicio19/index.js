const parrafos = document.querySelectorAll('.parrafo');

for (const parrafo of parrafos) {
  parrafo.addEventListener('dragstart', event => {
    parrafo.classList.add('dragging');
    event.dataTransfer.setData("id", parrafo.id);
  });

  parrafo.addEventListener('dragend', () => {
    parrafo.classList.remove('dragging');
  });
}

const secciones = document.querySelectorAll('.seccion');

for (const seccion of secciones) {
  seccion.addEventListener('dragover', event => {
    event.preventDefault()
  });
  seccion.addEventListener('drop', event => {
    const idParrafo = event.dataTransfer.getData("id")
    const parrafo = document.querySelector(`#${idParrafo}`);
    seccion.appendChild(parrafo);
  });
}

const papelera = document.querySelector('#papelera');
papelera.addEventListener('dragover', event => {
  event.preventDefault()
});
papelera.addEventListener('drop', event => {
  const idParrafo = event.dataTransfer.getData("id")
  const parrafo = document.querySelector(`#${idParrafo}`);
  parrafo.remove();
});