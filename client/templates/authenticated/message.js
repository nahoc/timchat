Template.message.helpers({
  name( userId ) {
    if ( userId ) {
      let user = Meteor.users.findOne( userId, { fields: { 'profile.name': 1 } } );
      return user ? `${ user.profile.name.first } ${ user.profile.name.last }` : '';
    }
  }
});

Template.message.events({
  'click a' ( event ) {
    event.preventDefault();
    window.open( event.target.href, '_blank' );
  }
});