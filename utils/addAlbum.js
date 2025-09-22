import supabase from "./supabaseclient";

export default async function addAlbum(name, artist, r_comments, p_comments, imageFile, genres) {
  let imageUrl = "";
  if (imageFile) {
    const fileName = `${Date.now()}_${imageFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from('album-images') 
      .upload(fileName, imageFile);

    if (storageError) {
      console.error('Error uploading image:', storageError);
      return null;
    }
    
    imageUrl = supabase.storage.from('album-images').getPublicUrl(fileName).data.publicUrl;
  }
  const { data, error } = await supabase
    .from('album_rankings')
    .insert([{ name, artist, r_comments, p_comments, image: imageUrl, genres }]);

  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}
