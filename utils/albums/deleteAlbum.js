import supabase from "../general/supabaseclient";

export default async function deleteAlbum(albumId) {
  try {
    const { data: deletedAlbum, error: deleteError } = await supabase
      .from('album_rankings')
      .delete()
      .eq('id', albumId);

    if (deleteError) {
      console.error('Error deleting album:', deleteError);
      return null;
    }
    return { deletedAlbum };
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
}
