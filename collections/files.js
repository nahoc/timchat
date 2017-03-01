Files = new FilesCollection({
    collectionName: 'files'
    , storagePath: 'data'
    , allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload: function (file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760) {
            return true;
        }
        else {
            return 'Le fichier doit être moins de 10MB.';
        }
    }
});