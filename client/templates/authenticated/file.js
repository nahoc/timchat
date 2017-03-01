Template.file.helpers({
    file: function () {
        let files = Files.find().fetch();
        console.log(files);
        if (files) {
            return files;
        }
    }
});