import supabase from "./supabaseclient";  

export default async function fetchGames() {
  const { data, error } = await supabase
    .from('video_game_rankings')
    .select('name, studio, image, r_comments, p_comments, id') 
  if (error) {
    console.error('Error fetching games:', error);
    return null;
  }

  return data.sort((a, b) => (b.r_comments.length + b.p_comments.length) - (a.r_comments.length + a.p_comments.length));
}
