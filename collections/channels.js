// Création de la collection
Channels = new Mongo.Collection('channels');
// allow rules
Channels.allow({
    insert: () => true
    , update: () => true
    , remove: () => true
});
// deny rules
Channels.deny({
    insert: () => false
    , update: () => false
    , remove: () => false
});
// Schéma
let ChannelsSchema = new SimpleSchema({
    'name': {
        type: String
        , label: 'Le nom du channel.'
    }
});