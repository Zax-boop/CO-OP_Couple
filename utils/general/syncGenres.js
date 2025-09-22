import { createClient } from '@supabase/supabase-js'

// 1️⃣ Read env vars (must be set inline or exported in your shell)
const { P1_URL, P1_KEY, P2_URL, P2_KEY, DRY_RUN } = process.env

if (!P1_URL || !P1_KEY || !P2_URL || !P2_KEY) {
  console.error('Missing env vars. Set P1_URL, P1_KEY, P2_URL, P2_KEY')
  process.exit(1)
}

const p1 = createClient(P1_URL, P1_KEY)
const p2 = createClient(P2_URL, P2_KEY)

async function syncGenres() {
  console.log('Starting sync. DRY_RUN =', DRY_RUN === '1')

  // 1️⃣ Fetch albums from p2
  const { data: p2Albums, error: p2Err } = await p2
    .from('belevision')
    .select('id, name, genres')
  if (p2Err) throw p2Err

  console.log(`Fetched ${p2Albums.length} albums from p2.`)
  const names = p2Albums.map(a => a.name).filter(Boolean)

  // 2️⃣ Fetch matching genres from p1
  const { data: p1Genres, error: p1Err } = await p1
    .from('movies_list')
    .select('name, genres')
    .in('name', names)
  if (p1Err) throw p1Err

  const genreMap = Object.fromEntries(p1Genres.map(a => [a.name, a.genres]))
  console.log('genreMap sample:', Object.entries(genreMap).slice(0, 10))

  // 3️⃣ Update p2 rows
  let updated = 0, skipped = 0
  for (const album of p2Albums) {
    const genres = genreMap[album.name]
    if (!genres) {
      skipped++
      console.warn(`No genres found for "${album.name}", skipping.`)
      continue
    }

    console.log(`Updating "${album.name}" with genres:`, genres)

    if (DRY_RUN === '1') continue // dry run mode

    const { error: upErr, data: upData } = await p2
      .from('belevision')
      .update({ genres })
      .eq('id', album.id)
      .select('id, name, genres')

    if (upErr) console.error(`Failed update for "${album.name}":`, upErr)
    else updated++
  }

  console.log(`Sync complete. Updated: ${updated}, Skipped: ${skipped}`)
}

syncGenres().catch(console.error)
