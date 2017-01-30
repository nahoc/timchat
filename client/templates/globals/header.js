// helpers
Template.header.helpers({
    currentChannel(name) {
        let current = FlowRouter.getParam('channel');
        if (current) {
            return current;
        }
    }
});

// events
Template.header.events({
  'click .logout' ( event ) {
    event.preventDefault();

    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  }
});