import supabase from "./supabaseclient";

export default async function deleteGames(gameId) {
  try {
    const { data: deletedGame, error: deleteError } = await supabase
      .from('video_game_rankings')
      .delete()
      .eq('id', gameId);

    if (deleteError) {
      console.error('Error deleting game:', deleteError);
      return null;
    }
    return { deletedGame };
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
}
