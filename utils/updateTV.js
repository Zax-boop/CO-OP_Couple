import supabase from "./supabaseclient";

export default async function updateTV(id, updatedFields) {
    const { name, director, r_comments, p_comments, imageFile, rank } = updatedFields;
    let imageUrl;
    if (imageFile) {
        const fileName = `${Date.now()}_${imageFile.name}`;
        const { data: storageData, error: storageError } = await supabase.storage
            .from('belevision_images')
            .upload(fileName, imageFile);

        if (storageError) {
            console.error('Error uploading new image:', storageError);
            return null;
        }

        imageUrl = supabase.storage.from('belevision_images').getPublicUrl(fileName).data.publicUrl;
    }
    if (rank !== undefined) {
        const { data: currentTV, error: fetchError } = await supabase
            .from('belevision')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError) {
            console.error('Error fetching current tv:', fetchError);
            return null;
        }

        const currentRank = currentTV.rank;

        if (currentRank !== rank) {
            if (rank < currentRank) {
                const { data: tvToUpdate, error: fetchError } = await supabase
                    .from('belevision')
                    .select('*')
                    .gte('rank', rank)
                    .lte('rank', currentRank);

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
            }
            if (rank > currentRank) {
                const { data: tvToUpdate, error: fetchError } = await supabase
                    .from('belevision')
                    .select('*')
                    .gt('rank', currentRank)
                    .lte('rank', rank);

                if (fetchError) {
                    console.error('Error fetching tv to update:', fetchError);
                    return null;
                }
                tvToUpdate.sort((a, b) => a.rank - b.rank)
                for (const tv of tvToUpdate) {
                    const { error: updateError } = await supabase
                        .from('belevision')
                        .update({ rank: tv.rank - 1 })
                        .eq('id', tv.id);

                    if (updateError) {
                        console.error(`Error updating rank for tv ID ${tv.id}:`, updateError);
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
        .from('belevision')
        .update(fieldsToUpdate)
        .eq('id', id);

    if (error) {
        console.error('Error updating tv:', error);
        return null;
    }

    return { success: true, updatedFields };
}