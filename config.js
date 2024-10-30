// Importar biblioteca de Supabase
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://wakkxdrjrcsnsdnphupv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // anon (pública)
const supabaseSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indha2t4ZHJqcmNzbnNkbnBodXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMDcxMTgsImV4cCI6MjA0NTg4MzExOH0.09LsLeJ_-jQ6DvSP1J2EWSkcExeJm5TE0Ty1_bCZDvA';
// Inicializa Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporta la instancia de Supabase
export { supabase };
