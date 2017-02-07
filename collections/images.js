Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {
        path: Meteor.absolutePath + "/public/uploads"
    })],
    filter: {
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'jpg', 'jpeg', 'gif']
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