/*
 ** Publication de la sidebar
 */
Meteor.publish('sidebar', function () {
    return [
        // retourne tous les channels existants
        Channels.find()
        , // retourne tous les utilisateurs
        Meteor.users.find({}, {
            fields: {
                username: 1
                , profile: 1
                , status: 1
                , avatar: 1
                , theme: 1
            }
        })
    ];
});
/*Meteor.publish('messages', function () {
    return [
        // retourne tous les channels existants
        Messages.find()
    ];
});*/
/*
 ** Publications des images
 */
Meteor.publish('images', function () {
    return Images.find();
});

/*
 ** Publications des thèmes
 */
Meteor.publish('themes', function () {
    return Themes.find();
});