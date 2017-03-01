/*
 ** Publication des fichiers
 */
Meteor.publish('files', function () {
    return Files.find().cursor;
});