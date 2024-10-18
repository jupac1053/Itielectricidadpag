// script.js


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https:https://zlkmikpzyonajhimfvfz.supabase.co
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsa21pa3B6eW9uYWpoaW1mdmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyMzUzMjYsImV4cCI6MjA0NDgxMTMyNn0.7G3tkjc6xg_50HkBYVyMnLncLmUhNAK7PycvnDWHj2c;
const supabase = createClient() 

// Importa Supabase
const { createClient } = supabase;



// Obtén los elementos del DOM
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen7 = document.getElementById('imagen7');

// Función para actualizar el estado en Supabase
async function updateDeviceState(deviceId, isChecked) {
    const { data, error } = await supabase
        .from('reles')
        .update({ estado: isChecked })
        .eq('id', deviceId);

    if (error) {
        console.error('Error updating device state:', error);
    }
}

// Manejo de eventos para los botones
boton1.addEventListener('change', () => {
    const isChecked = boton1.checked;
    updateDeviceState(1, isChecked); // Supongamos que '1' es el ID para boton1
    imagen1.src = isChecked ? 'imagen4.jpg' : 'imagen1.jpg';
});

boton2.addEventListener('change', () => {
    const isChecked = boton2.checked;
    updateDeviceState(2, isChecked); // '2' es el ID para boton2
    imagen2.src = isChecked ? 'imagen4.jpg' : 'imagen2.jpg';
});

boton3.addEventListener('change', () => {
    const isChecked = boton3.checked;
    updateDeviceState(3, isChecked); // '3' es el ID para boton3
    imagen3.src = isChecked ? 'imagen6.jpg' : 'imagen3.jpg';
});

boton4.addEventListener('change', () => {
    const isChecked = boton4.checked;
    updateDeviceState(4, isChecked); // '4' es el ID para boton4
    imagen7.src = isChecked ? 'imagen8.jpg' : 'imagen7.jpg';
});
async function testConnection() {
    const { data, error } = await supabase.from('reles').select('*');
    if (error) {
        console.error('Error connecting to Supabase:', error);
    } else {
        console.log('Data fetched from Supabase:', data);
    }
}

testConnection();

