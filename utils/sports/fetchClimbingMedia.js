import supabase from "../general/supabaseclient";

const fetchSportsMedia = async () => {
    try {
        const { data, error } = await supabase
            .storage
            .from('sports')  // Specify the bucket name
            .list('', { recursive: true });  // List all files

        if (error) {
            throw error;
        }

        const filteredFiles = data?.filter((file) => {
            const ext = file.name.split('.').pop()?.toLowerCase();
            return ['jpg', 'jpeg', 'png', 'mp4'].includes(ext || '');
        });

        const filesWithUrls = filteredFiles?.map(file => {
            const filePath = supabase.storage.from('sports').getPublicUrl(file.name);
            return { name: file.name, url: filePath };
        });
        return filesWithUrls;
    } catch (error) {
        console.error("Error fetching sports media:", error);
        return [];
    }
};

export default fetchSportsMedia;
