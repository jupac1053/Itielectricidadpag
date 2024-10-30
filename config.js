// Importar biblioteca de Supabase
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// Variables de entorno
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;
const supabaseSecret = import.meta.env.SUPABASE_SECRET;

// Inicializa Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporta la instancia de Supabase
export { supabase };
