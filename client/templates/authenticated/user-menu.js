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
                let user = Meteor.users.findOne(userId);
                if (!user.profile) {
                    return user.avatar;
                } else {
                    return user.profile.avatar;
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