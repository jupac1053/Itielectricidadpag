// Importar biblioteca de Supabase
import { createClient } from '@supabase/supabase-js';

// Carga variables de entorno desde Netlify
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSecret = process.env.SUPABASE_SECRET;

// Inicializa Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporta la instancia de Supabase
export { supabase };
