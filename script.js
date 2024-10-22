
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Función para actualizar el estado del dispositivo
function updateDeviceState(device, state) {
    database.ref('devices/' + device).set({
        state: state
    });
}

// Escuchar cambios en el estado de los dispositivos
database.ref('devices').on('value', (snapshot) => {
    const devices = snapshot.val();
    for (const device in devices) {
        const state = devices[device].state;
        document.getElementById('boton' + device).checked = state;
    }
});

// Manejo de eventos para los interruptores
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        const deviceId = event.target.id.replace('boton', '');
        const newState = event.target.checked;
        updateDeviceState(deviceId, newState);
    });
});
