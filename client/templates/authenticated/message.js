Template.message.onCreated(function () {
    this.autorun(() => {
        this.subscribe('messages');
    });
});
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
    }, imageLink(message) {
        // retourne l'URL d'une image dans une balise
        return /\.(gif|png|jpe?g)$/i.test(message) ? '<a class="well image-link" href="' + message + '" target="_blank"><img alt="Image" class="image-chat" src="' + message + '"></a>' : null;
    }, isOwner(userId) {
        // on veut savoir si c'est moi qui a écrit le message
        let me = Meteor.users.findOne({
            _id: Meteor.userId()
        });
        // on compare mon ID a celui du owner du message
        if (me._id == userId) {
            return ('<button class="delete-message">Supprimer</button>');
        }
    }
});
// events
Template.message.events({
    'click a' (event) {
        event.preventDefault();
        window.open(event.target.href, '_blank');
    }, 'click .delete-message' (event) {
        event.preventDefault();
        // valeur du message
        let messageContent = $(event.currentTarget).next().html();
        console.log(messageContent);
        let messageToDelete = Messages.findOne({
            message: messageContent
            , owner: Meteor.userId()
        });
        console.log(messageToDelete);
        // on supprime le message de la BD
        Messages.remove(messageToDelete._id);
    }
});