import supabase from "../general/supabaseclient";
export default async function updateBook(id, updatedFields) {
    const { name, author, r_comments, p_comments, imageFile, genres } = updatedFields;
    let imageUrl;
    if (imageFile) {
        const fileName = `${Date.now()}_${imageFile.name}`;
        const { data: storageData, error: storageError } = await supabase.storage
            .from('books')
            .upload(fileName, imageFile);

        if (storageError) {
            console.error('Error uploading new image:', storageError);
            return null;
        }

        imageUrl = supabase.storage.from('books').getPublicUrl(fileName).data.publicUrl;
    }
    const fieldsToUpdate = {
        ...(name !== undefined && { name }),
        ...(author !== undefined && { author }),
        ...(r_comments !== undefined && { r_comments }),
        ...(p_comments !== undefined && { p_comments }),
        ...(imageUrl && { image: imageUrl }),
        ...(genres !== undefined && { genres })
    };

    const { error } = await supabase
        .from('books_list')
        .update(fieldsToUpdate)
        .eq('id', id);

    if (error) {
        console.error('Error updating book:', error);
        return null;
    }

    return { success: true, updatedFields };
}
