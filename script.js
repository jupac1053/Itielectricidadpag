function enviarEstadoBotones() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbysOrzD3drLJa1puiaxK_u9Qj4I2HcFDzzrK063NX-H5-XcxBDR5aFDRLTQuYspQwd5Ag/exec';
  const params = `?boton1=${estadoBotones.boton1}&boton2=${estadoBotones.boton2}&boton3=${estadoBotones.boton3}&boton4=${estadoBotones.boton4}`;

  fetch(scriptURL + params)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
