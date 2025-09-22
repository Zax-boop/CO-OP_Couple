import supabase from "../general/supabaseclient";

export default async function updateGhibli(id, updatedFields) {
    const { name, director, r_comments, p_comments, imageFile, rank } = updatedFields;
    let imageUrl;
    if (imageFile) {
        const fileName = `${Date.now()}_${imageFile.name}`;
        const { data: storageData, error: storageError } = await supabase.storage
            .from('ghibli_images')
            .upload(fileName, imageFile);

        if (storageError) {
            console.error('Error uploading new image:', storageError);
            return null;
        }

        imageUrl = supabase.storage.from('ghibli_images').getPublicUrl(fileName).data.publicUrl;
    }
    if (rank !== undefined) {
        const { data: currentAnime, error: fetchError } = await supabase
            .from('ghibli')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError) {
            console.error('Error fetching current ghibli:', fetchError);
            return null;
        }

        const currentRank = currentAnime.rank;

        if (currentRank !== rank) {
            if (rank < currentRank) {
                const { data: animeToUpdate, error: fetchError } = await supabase
                    .from('ghibli')
                    .select('*')
                    .gte('rank', rank)
                    .lte('rank', currentRank);

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
            }
            if (rank > currentRank) {
                const { data: animeToUpdate, error: fetchError } = await supabase
                    .from('ghibli')
                    .select('*')
                    .gt('rank', currentRank)
                    .lte('rank', rank);

                if (fetchError) {
                    console.error('Error fetching ghibli to update:', fetchError);
                    return null;
                }
                animeToUpdate.sort((a, b) => a.rank - b.rank)
                for (const anime of animeToUpdate) {
                    const { error: updateError } = await supabase
                        .from('ghibli')
                        .update({ rank: anime.rank - 1 })
                        .eq('id', anime.id);

                    if (updateError) {
                        console.error(`Error updating rank for ghibli ID ${anime.id}:`, updateError);
                        return null;
                    }
                }
            }
        }
    }

    const fieldsToUpdate = {
        ...(name !== undefined && { name }),
        ...(director !== undefined && { director }),
        ...(r_comments !== undefined && { r_comments }),
        ...(p_comments !== undefined && { p_comments }),
        ...(imageUrl && { image: imageUrl }),
        ...(rank !== undefined && { rank }),
    };

    const { error } = await supabase
        .from('ghibli')
        .update(fieldsToUpdate)
        .eq('id', id);

    if (error) {
        console.error('Error updating ghibli:', error);
        return null;
    }

    return { success: true, updatedFields };
}
