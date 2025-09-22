import supabase from "./supabaseclient";

export default async function addTV(name, director, r_comments, p_comments, imageFile, rank, genres) {
  let imageUrl = "";
  if (rank == "") {
    const { data: list, error: fetchError } = await supabase
      .from('belevision')
      .select('*');
    if (fetchError) {
      console.error('Error fetching tv to update:', fetchError);
      return null;
    }
    rank = list.length + 1;
  }

  if (imageFile) {
    const fileName = `${Date.now()}_${imageFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from('belevision_images')
      .upload(fileName, imageFile);

    if (storageError) {
      console.error('Error uploading image:', storageError);
      return null;
    }

    imageUrl = supabase.storage.from('belevision_images').getPublicUrl(fileName).data.publicUrl;
  }
  const { data: tvToUpdate, error: fetchError } = await supabase
    .from('belevision')
    .select('*')
    .gte('rank', rank);

  if (fetchError) {
    console.error('Error fetching tv to update:', fetchError);
    return null;
  }
  tvToUpdate.sort((a, b) => b.rank - a.rank)
  for (const tv of tvToUpdate) {
    const { error: updateError } = await supabase
      .from('belevision')
      .update({ rank: tv.rank + 1 })
      .eq('id', tv.id);

    if (updateError) {
      console.error(`Error updating rank for tv ID ${tv.id}:`, updateError);
      return null;
    }
  }
  const { data, error } = await supabase
    .from('belevision')
    .insert([{ name, director, r_comments, p_comments, image: imageUrl, rank, genres }]);
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}
