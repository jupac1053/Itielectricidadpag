// Obtén los elementos checkbox y las imágenes
const boton1 = document.getElementById('boton1');
const imagen1 = document.getElementById('imagen1');
const boton2 = document.getElementById('boton2');
const imagen2 = document.getElementById('imagen2');
const boton3 = document.getElementById('boton3');
const imagen3 = document.getElementById('imagen3');
const boton4 = document.getElementById('boton4');
const imagen4 = document.getElementById('imagen7');

// Funciones para cambiar las imágenes
function cambiarImagen1() {
  if (boton1.checked) {
    imagen1.src = 'imagen5.jpg';
  } else {
    imagen1.src = 'imagen1.jpg';
  }
}

function cambiarImagen2() {
  if (boton2.checked) {
    imagen2.src = 'imagen6.jpg';
  } else {
    imagen2.src = 'imagen2.jpg';
  }
}

function cambiarImagen3() {
  if (boton3.checked) {
    imagen3.src = 'imagen6.jpg';
  } else {
    imagen3.src = 'imagen3.jpg';
  }
}

function cambiarImagen4() {
  if (boton4.checked) {
    imagen4.src = 'imagen8.gif';
  } else {
    imagen4.src = 'imagen7.gif';
  }
}

// Agrega eventos a los checkbox
boton1.addEventListener('change', cambiarImagen1);
boton2.addEventListener('change', cambiarImagen2);
boton3.addEventListener('change', cambiarImagen3);
boton4.addEventListener('change', cambiarImagen4);
