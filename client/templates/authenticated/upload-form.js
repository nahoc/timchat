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
                    Bert.alert("Erreur lors du téléversement du fichier.", 'danger');
                }
                else {
                    let isDirect = false;
                    let messageText = '<a target="_parent" href="/cdn/storage/files/' + fileObj._id + '/original/' + fileObj._id + fileObj.extension + '"><img src="/cdn/storage/files/' + fileObj._id + '/original/' + fileObj._id + fileObj.extension + '" alt="' + fileObj.name + '" /></a>';
                    
                    let current = FlowRouter.getParam('channel');
                    if (current) {
                        if (current[0] == "@") {
                            isDirect = true;
                        }
                    }
                    let message = {
                        "destination": FlowRouter.getParam('channel').replace('@', '')
                        , "isDirect": isDirect
                        , "message": messageText
                    };
                    Meteor.call('insertMessage', message, (error) => {
                        if (error) {
                            Bert.alert(error.reason, 'danger');
                        }
                        else {
                            event.target.value = '';
                        }
                    });
                    Bert.alert("Fichier téléversé avec succès!", 'success');
                }
                template.currentUpload.set(false);
            });
            upload.start();
        }
    }
});