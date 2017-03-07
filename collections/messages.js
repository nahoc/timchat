Messages = new Mongo.Collection('messages');

Messages.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
});

Messages.deny({
    insert: () => false,
    update: () => false,
    remove: () => false
});

let MessagesSchema = new SimpleSchema({
    'channel': {
        type: String,
        label: 'Le ID du channel dans lequel va le message.',
        optional: true
    },
    'to': {
        type: String,
        label: 'À qui le message est destiné.',
        optional: true
    },
    'owner': {
        type: String,
        label: 'Le ID de la personne qui a créé le message.'
    },
    'timestamp': {
        type: Date,
        label: 'La date de création du message.',
        optional: true
    },
    'message': {
        type: String,
        label: 'Le contenu du message.'
    }
});

Messages.attachSchema(MessagesSchema);