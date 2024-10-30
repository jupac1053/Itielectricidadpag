// Importar biblioteca de Supabase
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// Variables de entorno
const supabaseUrl = window._env_.SUPABASE_URL;
const supabaseKey = window._env_.SUPABASE_KEY;
const supabaseSecret = window._env_.SUPABASE_SECRET;

// Inicializa Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporta la instancia de Supabase
export { supabase };
