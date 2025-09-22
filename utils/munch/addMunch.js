import supabase from "../general/supabaseclient";

export default async function addMunch(mediaFile) {
    if (!mediaFile) return null;

    const fileName = `${Date.now()}_${mediaFile.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
        .from('munch')
        .upload(fileName, mediaFile);

    if (storageError) {
        console.error('Error uploading file:', storageError);
        return null;
    }

    return supabase.storage.from('munch').getPublicUrl(fileName).data.publicUrl;
}
