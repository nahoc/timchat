// imports
import changeUsername from '../../modules/change-username';
import cleanupUsername from '../../modules/cleanup-username';
// helpers
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
    }, avatar(userId) {
        if (userId) {
            let user = Meteor.users.findOne(userId, {
                fields: {
                    'avatar': 1
                    , 'profile': 1
                }
            });
            if (user.profile && user.profile != "null") {
                return user.avatar;
            }
            else {
                var urlAvatar = '/cfs/files/images/' + user.avatar;
                return urlAvatar;
            }
        }
    }
});
// on rendered
Template.userMenu.onRendered(function () {
    $('#textArea.editable').editable({
        success: function (response, newValue) {
            changeUsername(newValue);
        }
    });
});
// events
Template.userMenu.events({
    'keyup textarea' (event) {
        // clean the username
        let value = event.target.value
            , formatted = cleanupUsername(value);
        event.target.value = formatted;
        // si l'usager clique sur enter le nom est modifié
        $(".form-inline").keypress(function (e) {
            if (e.which == 13) {
                $(".form-inline").submit();
            }
        });
    }
});