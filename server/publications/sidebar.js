/*
 ** Publication de la sidebar
 */
Meteor.publish('sidebar', function() {
    return [
        // retourne tous les channels existants
        Channels.find(),
        // retourne tous les utilisateurs
        Meteor.users.find({
            // l'utilisateur ne peut pas s'écrire à lui même
            // todo: fixer, cela peut être pratique?
            _id: {
                $ne: this.userId
            }
        }, {

            fields: {
                username: 1,
                'profile.name': 1
            }
        })
    ];
});
