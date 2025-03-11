import supabase from "./supabaseclient";  

export default async function fetchGhibli() {
  const { data, error } = await supabase
    .from('ghibli')
    .select('name, director, r_comments, p_comments, image, rank, id') 
    .order('rank', { ascending: true }); 

  if (error) {
    console.error('Error fetching ghibli:', error);
    return null;
  }

  return data;
}
