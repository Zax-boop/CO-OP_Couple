import supabase from "../general/supabaseclient";  

export default async function fetchBooks() {
  const { data, error } = await supabase
    .from('books_list')
    .select('name, author, r_comments, p_comments, image, id, genres')

  if (error) {
    console.error('Error fetching books:', error);
    return null;
  }

  return data.sort((a, b) => (b.r_comments.length + b.p_comments.length) - (a.r_comments.length + a.p_comments.length));
}
