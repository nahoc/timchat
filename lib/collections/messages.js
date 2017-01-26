/*
 ** Création de la BD pour les messages des utilisateurs
 */
Messages = new Mongo.Collection('messages');

// règles de sécurité pour la BD
Messages.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Messages.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});

// schéma des messages
let MessagesSchema = new SimpleSchema({
    'channel': {
        type: String,
        optional: true
    },
    'to': {
        type: String,
        optional: true
    },
    'owner': {
        type: String
    },
    'timestamp': {
        type: Date
    },
    'message': {
        type: String
    }
});

// on attache le schéma à la BD des messages
Messages.attachSchema(MessagesSchema);
