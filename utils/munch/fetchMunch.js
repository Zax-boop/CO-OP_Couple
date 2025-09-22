import supabase from "../general/supabaseclient";

const fetchMunch = async () => {
    try {
        let allFiles = [];
        let offset = 0;
        const limit = 100; 

        while (true) {
            const { data, error } = await supabase
                .storage
                .from('munch')
                .list('', { limit, offset, recursive: true });

            if (error) throw error;
            if (!data || data.length === 0) break; 

            allFiles = [...allFiles, ...data]; 
            offset += limit; 
        }
        const filteredFiles = allFiles.filter((file) => {
            const ext = file.name.split('.').pop()?.toLowerCase();
            return ['jpg', 'jpeg', 'png', 'mp4'].includes(ext || '');
        });
        const filesWithUrls = filteredFiles.map(file => {
            const filePath = supabase.storage.from('munch').getPublicUrl(file.name);
            return { name: file.name, url: filePath };
        });

        return filesWithUrls;
    } catch (error) {
        console.error("Error fetching munch media:", error);
        return [];
    }
};

export default fetchMunch;
