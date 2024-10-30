// Importar biblioteca de Supabase
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// Variables de entorno
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSecret = process.env.SUPABASE_SECRET;

// Inicializa Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporta la instancia de Supabase
export { supabase };
