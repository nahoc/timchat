/*
 ** Création de la BD pour les channels
 */
Channels = new Mongo.Collection('channels');

// règles de sécurité pour la BD
Channels.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Channels.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});

// schéma des channels
let ChannelsSchema = new SimpleSchema({
    'name': {
        type: String
    }
});

// on attache le schéma à la BD des channels
Channels.attachSchema(ChannelsSchema);
