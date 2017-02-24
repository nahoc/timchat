// on created
Template.uploadForm.onCreated(function () {
    this.currentUpload = new ReactiveVar(false);
});
// helpers
Template.uploadForm.helpers({
    currentUpload: function () {
        return Template.instance().currentUpload.get();
    }
});
// events
Template.uploadForm.events({
    'change #fileInput': function (e, template) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            // We upload only one file, in case
            // multiple files were selected
            var upload = Files.insert({
                file: e.currentTarget.files[0]
                , streams: 'dynamic'
                , chunkSize: 'dynamic'
            }, false);
            upload.on('start', function () {
                template.currentUpload.set(this);
            });
            upload.on('end', function (error, fileObj) {
                if (error) {
                    alert('Error during upload: ' + error);
                }
                else {
                    alert('File "' + fileObj.name + '" successfully uploaded');
                }
                template.currentUpload.set(false);
            });
            upload.start();
        }
    }
});