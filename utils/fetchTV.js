import supabase from "./supabaseclient";  

export default async function fetchTV() {
  const { data, error } = await supabase
    .from('belevision')
    .select('name, director, r_comments, p_comments, image, rank, id') 
    .order('rank', { ascending: true }); 

  if (error) {
    console.error('Error fetching tv shows:', error);
    return null;
  }

  return data;
}
