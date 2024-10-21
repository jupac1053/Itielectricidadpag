document.addEventListener('DOMContentLoaded', () => {
  const devices = [
    { id: 1, button: 'boton1', image: 'imagen1', imgOn: 'imagen4.jpg', imgOff: 'imagen1.jpg' },
    { id: 2, button: 'boton2', image: 'imagen2', imgOn: 'imagen5.jpg', imgOff: 'imagen2.jpg' },
    { id: 3, button: 'boton3', image: 'imagen3', imgOn: 'imagen6.jpg', imgOff: 'imagen3.jpg' },
    { id: 4, button: 'boton4', image: 'imagen7', imgOn: 'imagen8.gif', imgOff: 'imagen7.gif' }
  ];

  devices.forEach(device => {
    const checkbox = document.getElementById(device.button);
    const imgElement = document.getElementById(device.image);

    // Load initial state from Supabase
    loadDeviceState(device.id, checkbox, imgElement, device.imgOn, device.imgOff);

    checkbox.add
