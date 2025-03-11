import supabase from "./supabaseclient";

export default async function addMushroom(mediaFile) {
    if (!mediaFile) return null;

    const fileName = `${Date.now()}_${mediaFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
        .from('mushroom')
        .upload(fileName, mediaFile);

    if (storageError) {
        console.error('Error uploading file:', storageError);
        return null;
    }

    return supabase.storage.from('mushroom').getPublicUrl(fileName).data.publicUrl;
}
