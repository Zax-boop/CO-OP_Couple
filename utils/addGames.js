import supabase from "./supabaseclient";

export default async function addGame(name, studio, r_comments, p_comments, imageFile, genres) {
  let imageUrl = "";
  if (imageFile) {
    const fileName = `${Date.now()}_${imageFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from('video_games') 
      .upload(fileName, imageFile);

    if (storageError) {
      console.error('Error uploading image:', storageError);
      return null;
    }
    
    imageUrl = supabase.storage.from('video_games').getPublicUrl(fileName).data.publicUrl;
  }
  const { data, error } = await supabase
    .from('video_game_rankings')
    .insert([{ name, studio, r_comments, p_comments, image: imageUrl, genres}]);
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}
