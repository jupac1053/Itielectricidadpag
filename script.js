const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');

const estadoBotones = {
  boton1: false,
  boton2: false,
  boton3: false,
  boton4: false
};

boton1.addEventListener('change', () => {
  estadoBotones.boton1 = boton1.checked;
  enviarEstadoBotones();
});

boton2.addEventListener('change', () => {
  estadoBotones.boton2 = boton2.checked;
  enviarEstadoBotones();
});

boton3.addEventListener('change', () => {
  estadoBotones.boton3 = boton3.checked;
  enviarEstadoBotones();
});

boton4.addEventListener('change', () => {
  estadoBotones.boton4 = boton4.checked;
  enviarEstadoBotones();
});

function enviarEstadoBotones() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbysOrzD3drLJa1puiaxK_u9Qj4I2HcFDzzrK063NX-H5-XcxBDR5aFDRLTQuYspQwd5Ag/exec';
  const formData = new FormData();
  formData.append('boton1', estadoBotones.boton1);
  formData.append('boton2', estadoBotones.boton2);
  formData.append('boton3', estadoBotones.boton3);
  formData.append('boton4', estadoBotones.boton4);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
}
