// Importa la instancia de Supabase
import { supabase } from './config.js';

// Función para actualizar el estado del dispositivo
async function updateDeviceState(deviceId, state) {
  const { data, error } = await supabase
    .from('dispositivos')
    .update({ estado: state })
    .eq('id', deviceId);
  if (error) console.error(error);
}

// Escuchar cambios en la base de datos
supabase
  .from('dispositivos')
  .on('UPDATE', (payload) => {
    const deviceId = payload.new.id;
    const state = payload.new.estado;
    document.getElementById(`boton${deviceId}`).checked = state;
  })
  .subscribe();

// Eventos de los checkboxes
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const deviceId = event.target.id.replace('boton', '');
      const newState = event.target.checked;
      updateDeviceState(deviceId, newState);
    });
  });
});
