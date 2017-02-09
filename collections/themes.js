// Création de la collection
Themes = new Mongo.Collection('themes');
// allow rules
Themes.allow({
    insert: () => true
    , update: () => true
    , remove: () => true
});
// deny rules
Themes.deny({
    insert: () => false
    , update: () => false
    , remove: () => false
});
// Schéma
let ThemeSchema = new SimpleSchema({
    'name': {
        type: String
        , label: 'Le nom du theme.'
    }
    , 'sidebarBackground': {
        type: String
        , label: 'Couleur du fond de la sidebar'
    }
    , 'textColor': {
        type: String
        , label: 'Couleur du texte'
    }
    , 'menuHover': {
        type: String
        , label: 'Couleur de fond au hover du channel ou du user'
    }
    , 'menuActive': {
        type: String
        , label: 'Couleur de fond au clic du channel ou du user'
    }
    , 'statusActive': {
        type: String
        , label: "Couleur de fond du rond d'activité d'un user"
    }
});
Themes.attachSchema(ThemeSchema);