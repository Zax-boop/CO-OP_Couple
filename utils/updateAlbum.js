import supabase from "./supabaseclient";

export default async function updateAlbum(id, updatedFields) {
    const { name, artist, r_comments, p_comments, imageFile } = updatedFields;
    let imageUrl;
    if (imageFile) {
        const fileName = `${Date.now()}_${imageFile.name}`;
        const { data: storageData, error: storageError } = await supabase.storage
            .from('album-images')
            .upload(fileName, imageFile);

        if (storageError) {
            console.error('Error uploading new image:', storageError);
            return null;
        }

        imageUrl = supabase.storage.from('album-images').getPublicUrl(fileName).data.publicUrl;
    }

    const fieldsToUpdate = {
        ...(name !== undefined && { name }),
        ...(artist !== undefined && { artist }),
        ...(r_comments !== undefined && { r_comments }),
        ...(p_comments !== undefined && { p_comments }),
        ...(imageUrl && { image: imageUrl }),
    };

    const { error } = await supabase
        .from('album_rankings')
        .update(fieldsToUpdate)
        .eq('id', id);

    if (error) {
        console.error('Error updating album:', error);
        return null;
    }

    return { success: true, updatedFields };
}
