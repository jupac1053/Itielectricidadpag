// script.js


import { createClient } from '@supabase/supabase-js'
// Importa Supabase
const { createClient } = supabase;
const supabaseUrl = 'https:https://zlkmikpzyonajhimfvfz.supabase.co
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsa21pa3B6eW9uYWpoaW1mdmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyMzUzMjYsImV4cCI6MjA0NDgxMTMyNn0.7G3tkjc6xg_50HkBYVyMnLncLmUhNAK7PycvnDWHj2c;
const supabase = createClient() 

// Function to change images based on checkbox state
async function toggleRelayAndImage(buttonId, imageId, newImage) {
    const checkbox = document.getElementById(buttonId);
    const image = document.getElementById(imageId);
    
    // Send request to Supabase to toggle the relay
    const { data, error } = await supabase
        .from('your_table_name') // Replace with your actual table name
        .update({ relay_state: checkbox.checked ? 1 : 0 }) // Adjust column name as needed
        .match({ id: buttonId }); // Match the appropriate record based on your schema

    if (error) {
        console.error('Error updating relay state:', error);
        return;
    }

    // Change the image based on the checkbox state
    if (checkbox.checked) {
        image.src = newImage; // Set to the new image when checked
    } else {
        image.src = image.src.replace(newImage, image.src.split('/').pop()); // Reset to original image
    }
}

// Event listeners for each checkbox
document.getElementById('boton1').addEventListener('change', () => {
    toggleRelayAndImage('boton1', 'imagen1', 'imagen4.jpg'); // Change to imagen4
});

document.getElementById('boton2').addEventListener('change', () => {
    toggleRelayAndImage('boton2', 'imagen2', 'imagen5.jpg'); // Change to imagen5
});

document.getElementById('boton3').addEventListener('change', () => {
    toggleRelayAndImage('boton3', 'imagen3', 'imagen6.jpg'); // Change to imagen6
});

document.getElementById('boton4').addEventListener('change', () => {
    toggleRelayAndImage('boton4', 'imagen7', 'imagen8.gif'); // Change to imagen8
});
