Template.file.helpers({
    file: function () {
        let files = Files.find().fetch();
        if (files) {
            return files;
        }
    }
});