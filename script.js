// Importar instancia de Supabase
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

// Obtener dispositivos desde la base de datos
async function getDispositivos() {
  const { data, error } = await supabase
    .from('dispositivos')
    .select('*');
  if (error) console.error(error);
  else {
    data.forEach((dispositivo) => {
      const deviceId = dispositivo.id;
      const estado = dispositivo.estado;
      document.getElementById(`boton${deviceId}`).checked = estado;
    });
  }
}

// Llamar función para obtener dispositivos
getDispositivos();

// Agregar evento a los botones
document.querySelectorAll('.switch').forEach((element) => {
  element.addEventListener('change', (e) => {
    const deviceId = e.target.id.replace('boton', '');
    const state = e.target.checked;
    updateDeviceState(deviceId, state);
  });
});
