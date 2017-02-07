// helpers
Template.message.helpers({
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
                }
            });
            if (user.profile) {
                return user.profile.avatar;
            } else {
                var urlAvatar = '/cfs/files/images/' + user.avatar; /*+ "/" + fileObj.original.name*/
                return /*user.avatar*/ urlAvatar;
            }
        }
    }, imageLink(message) {
        // retourne l'URL d'une image dans une balise
        return /\.(gif|png|jpe?g)$/i.test(message) ?
            '<a class="well image-link" href="' + message + '" target="_blank"><img alt="Image" class="image-chat" src="' + message + '"></a>' : null;
    }
});

// events
Template.message.events({
    'click a' (event) {
        event.preventDefault();
        window.open(event.target.href, '_blank');
    }
});