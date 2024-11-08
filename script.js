document.addEventListener('DOMContentLoaded', () => {
  const estadoBotones = {
    boton1: false,
    boton2: false,
    boton3: false,
    boton4: false
  };

  // Escucha el cambio en cada checkbox
  document.getElementById('boton1').addEventListener('change', (e) => {
    estadoBotones.boton1 = e.target.checked;
    enviarEstadoBotones();
  });

  document.getElementById('boton2').addEventListener('change', (e) => {
    estadoBotones.boton2 = e.target.checked;
    enviarEstadoBotones();
  });

  document.getElementById('boton3').addEventListener('change', (e) => {
    estadoBotones.boton3 = e.target.checked;
    enviarEstadoBotones();
  });

  document.getElementById('boton4').addEventListener('change', (e) => {
    estadoBotones.boton4 = e.target.checked;
    enviarEstadoBotones();
  });

  // Función para enviar datos a Google Apps Script
  function enviarEstadoBotones() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbysOrzD3drLJa1puiaxK_u9Qj4I2HcFDzzrK063NX-H5-XcxBDR5aFDRLTQuYspQwd5Ag/exec';
    const params = `?boton1=${estadoBotones.boton1}&boton2=${estadoBotones.boton2}&boton3=${estadoBotones.boton3}&boton4=${estadoBotones.boton4}`;

    fetch(scriptURL + params)
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
});
