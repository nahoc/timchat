import changeUsername from '../../modules/change-username';

Template.userMenu.helpers({
    name(userId) {
            if (userId) {
                let user = Meteor.users.findOne(userId, {
                    fields: {
                        'username': 1
                    }
                });
                return user.username;
            }
        },
        avatar(userId) {
            if (userId) {
                let user = Meteor.users.findOne(userId, {
                    fields: {
                        'avatar': 1,
                        'profile': 1
                    }
                });
                if (user.profile && user.profile != "null") {
                    return user.avatar;
                } else {
                    var urlAvatar = '/cfs/files/images/' + user.avatar;
                    return urlAvatar;
                }
            }
        }
});

Template.userMenu.onRendered(function () {
    $('#textArea.editable').editable({
        success: function (response, newValue) {
            changeUsername(newValue);
        }
    });
});