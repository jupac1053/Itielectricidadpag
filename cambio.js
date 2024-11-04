const botonesCheckbox = document.querySelectorAll('.boton-checkbox');

botonesCheckbox.forEach((boton) => {
  boton.addEventListener('change', (e) => {
    const idImagen = `imagen${e.target.id.replace('boton', '')}`;
    const imagen = document.getElementById(idImagen);
    const estado = e.target.checked ? 'encendido' : 'apagado';

    // Cambia la imagen según el estado del botón
    switch (idImagen) {
      case 'imagen1':
        imagen.src = estado === 'encendido' ? 'imagen4.jpg' : 'imagen1.jpg';
        break;
      case 'imagen2':
        imagen.src = estado === 'encendido' ? 'imagen5.jpg' : 'imagen2.jpg';
        break;
      case 'imagen3':
        imagen.src = estado === 'encendido' ? 'imagen6.jpg' : 'imagen3.jpg';
        break;
      case 'imagen7':
        imagen.src = estado === 'encendido' ? 'imagen8.gif' : 'imagen7.gif';
        break;
      default:
        break;
    }
  });
});
