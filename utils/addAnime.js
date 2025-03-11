import supabase from "./supabaseclient";

export default async function addGhibli(name, director, r_comments, p_comments, imageFile, rank) {
  let imageUrl = "";
  if (rank == "") {
    const { data: list, error: fetchError } = await supabase
      .from('ghibli')
      .select('*');
    if (fetchError) {
      console.error('Error fetching ghibli to update:', fetchError);
      return null;
    }
    rank = list.length + 1;
  }
  if (imageFile) {
    const fileName = `${Date.now()}_${imageFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from('ghibli_images') 
      .upload(fileName, imageFile);

    if (storageError) {
      console.error('Error uploading image:', storageError);
      return null;
    }
    
    imageUrl = supabase.storage.from('ghibli_images').getPublicUrl(fileName).data.publicUrl;
  }
  const { data: animeToUpdate, error: fetchError } = await supabase
    .from('ghibli')
    .select('*')
    .gte('rank', rank); 

  if (fetchError) {
    console.error('Error fetching ghibli to update:', fetchError);
    return null;
  }
  animeToUpdate.sort((a, b) => b.rank - a.rank)
  for (const anime of animeToUpdate) {
    const { error: updateError } = await supabase
      .from('ghibli')
      .update({ rank: anime.rank + 1 }) 
      .eq('id', anime.id);

    if (updateError) {
      console.error(`Error updating rank for ghibli ID ${anime.id}:`, updateError);
      return null;
    }
  }
  const { data, error } = await supabase
    .from('ghibli')
    .insert([{ name, director, r_comments, p_comments, image: imageUrl, rank}]);
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}
