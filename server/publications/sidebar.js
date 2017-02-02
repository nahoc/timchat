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
            }
        })
    ];
});
/*
 ** Publications des images
 */
Meteor.publish('images', function () {
    return Images.find();
});