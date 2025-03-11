import supabase from "./supabaseclient";

const fetchMushroom = async () => {
    try {
        let allFiles = [];
        let offset = 0;
        const limit = 100; // Max files per request

        while (true) {
            // Fetch files in batches of 100
            const { data, error } = await supabase
                .storage
                .from('mushroom')
                .list('', { limit, offset, recursive: true });

            if (error) throw error;
            if (!data || data.length === 0) break; // Stop if no more files

            allFiles = [...allFiles, ...data]; // Add to total files
            offset += limit; // Move to the next batch
        }

        // Filter only images and videos
        const filteredFiles = allFiles.filter((file) => {
            const ext = file.name.split('.').pop()?.toLowerCase();
            return ['jpg', 'jpeg', 'png', 'mp4'].includes(ext || '');
        });

        // Generate public URLs
        const filesWithUrls = filteredFiles.map(file => {
            const filePath = supabase.storage.from('mushroom').getPublicUrl(file.name);
            return { name: file.name, url: filePath };
        });

        return filesWithUrls;
    } catch (error) {
        console.error("Error fetching mushroom media:", error);
        return [];
    }
};

export default fetchMushroom;
