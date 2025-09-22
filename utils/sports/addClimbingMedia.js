import supabase from "../general/supabaseclient";

export default async function addSportsMedia(mediaFile) {
  let mediaURL = "";

  if (mediaFile) {
    const fileName = `${Date.now()}_${mediaFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from('sports') 
      .upload(fileName, mediaFile);

    if (storageError) {
      console.error('Error uploading image:', storageError);
      return null;
    }
    
    mediaURL = supabase.storage.from('sports').getPublicUrl(fileName).data.publicUrl;
  }
  return mediaURL;
}
