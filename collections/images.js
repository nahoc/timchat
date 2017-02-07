Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {
        path: Meteor.absolutePath + "/public/uploads"
    })],
    filter: {
        maxSize: 150000, //max 150kb 
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'jpg', 'jpeg', 'gif']
        },
        onInvalid: function () {
            if (Meteor.isClient) {
                alert("Erreur. Le fichier doit être un png, jpg, jpeg ou gif de moins de 150kb.");
            } else {
                console.log("Erreur. Le fichier doit être un png, jpg, jpeg ou gif de moins de 150kb.");
            }
        }
    }
});

// deny rules
Images.deny({
    insert: function () {
        return false;
    },
    update: function () {
        return false;
    },
    remove: function () {
        return false;
    },
    download: function () {
        return false;
    }
});

// allow rules
Images.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    download: function () {
        return true;
    }
});