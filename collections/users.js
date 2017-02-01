// allow rules
Meteor.users.allow({
    insert: () => true
    , update: () => true
    , remove: () => true
});
// deny rules
Meteor.users.deny({
    insert: () => false
    , update: () => false
    , remove: () => false
});