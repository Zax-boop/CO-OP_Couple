import supabase from "./supabaseclient";  

export default async function fetchAlbums() {
  const { data, error } = await supabase
    .from('album_rankings')
    .select('name, artist, r_comments, p_comments, image, genres, id') 
  if (error) {
    console.error('Error fetching albums:', error);
    return null;
  }

  return data.sort((a, b) => (b.r_comments.length + b.p_comments.length) - (a.r_comments.length + a.p_comments.length));
}
