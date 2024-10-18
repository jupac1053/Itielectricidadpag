// Inicializa Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-QOiNqn1UUEmAU5xdp5Ezdjc68iLsFQU",
  authDomain: "iti-electricidad-ae0b5.firebaseapp.com",
  databaseURL: "https://iti-electricidad-ae0b5-default-rtdb.firebaseio.com",
  projectId: "iti-electricidad-ae0b5",
  storageBucket: "iti-electricidad-ae0b5.appspot.com",
  messagingSenderId: "248405714893",
  appId: "1:248405714893:web:98609ab75ce3feb8a70684",
  measurementId: "G-TBLGPR5066"
};

// Función para actualizar el estado y la imagen
function updateDeviceStatus(deviceId, status) {
    // Actualiza el estado en Firebase
    database.ref('devices/' + deviceId).set(status);

    // Cambia la imagen según el estado
    const imgElement = document.getElementById('imagen' + deviceId.slice(-1));
    if (deviceId === 'boton1') {
        imgElement.src = status ? 'imagen1.jpg' : 'imagen4.jpg';
    } else if (deviceId === 'boton2') {
        imgElement.src = status ? 'imagen2.jpg' : 'imagen4.jpg';
    } else if (deviceId === 'boton3') {
        imgElement.src = status ? 'imagen3.jpg' : 'imagen6.jpg';
    } else if (deviceId === 'boton4') {
        imgElement.src = status ? 'imagen7.jpg' : 'imagen8.jpg';
    }
}

// Manejo de eventos de los botones
document.getElementById('boton1').addEventListener('change', function() {
    updateDeviceStatus('boton1', this.checked);
});

document.getElementById('boton2').addEventListener('change', function() {
    updateDeviceStatus('boton2', this.checked);
});

document.getElementById('boton3').addEventListener('change', function() {
    updateDeviceStatus('boton3', this.checked);
});

document.getElementById('boton4').addEventListener('change', function() {
    updateDeviceStatus('boton4', this.checked);
});










