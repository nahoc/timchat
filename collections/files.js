Files = new FilesCollection({
    collectionName: 'Files'
    , storagePath: 'data'
    , allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload: function (file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760) {
            return true;
        }
        else {
            return 'Le fichier doit être moins de 10MB';
        }
    }
});
if (Meteor.isClient) {
    Meteor.subscribe('files');
}
if (Meteor.isServer) {
    Meteor.publish('files', function () {
        return Files.find().cursor;
    });
}