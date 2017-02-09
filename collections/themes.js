// Création de la collection
Themes = new Mongo.Collection( 'themes' );

// allow rules
Themes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

// deny rules
Themes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

// Schéma
let ThemeSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'Le nom du theme.'
  }
});
Themes.attachSchema( ThemeSchema );