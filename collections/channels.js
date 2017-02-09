// Création de la collection
Channels = new Mongo.Collection('channels');
// allow rules
Channels.allow({
    insert: () => false
    , update: () => false
    , remove: () => false
});
// deny rules
Channels.deny({
    insert: () => true
    , update: () => true
    , remove: () => true
});
// Schéma
let ChannelsSchema = new SimpleSchema({
    'name': {
        type: String
        , label: 'The name of the channel.'
    }
});