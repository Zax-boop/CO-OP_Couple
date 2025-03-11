import supabase from "./supabaseclient";

export default async function deleteGhibli(animeId, rank) {
  try {
    const { data: deletedAnime, error: deleteError } = await supabase
      .from('ghibli')
      .delete()
      .eq('id', animeId);

    if (deleteError) {
      console.error('Error deleting ghibli:', deleteError);
      return null;
    }
    const { data: animeToUpdate, error: fetchError } = await supabase
      .from('ghibli')
      .select('*')
      .gt('rank', rank);

    if (fetchError) {
      console.error('Error fetching ghibli to update:', fetchError);
      return null;
    }
    animeToUpdate.sort((a, b) => a.rank - b.rank);
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

    return { deletedAnime, updatedAnime: animeToUpdate };
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
}
