// helpers
Template.header.helpers({
    currentChannel() {
        let current = FlowRouter.getParam('channel');
        if (current) {
            if (current[0] == "@") {
                // on ajoute un "@" devant le nom de la personne
                // dans le header
                return current;
            } else if (current[0] != "@") {
                // on ajout un "#" devant le nom du channel
                // dans le header
                return "#" + current;
            }
        }
    }
});

// events
Template.header.events({
    'click .logout' (event) {
        event.preventDefault();

        Meteor.logout((error) => {
            if (error) {
                Bert.alert(error.reason, 'warning');
            } else {
                Bert.alert('Vous avez bien été deconnecté!', 'success');
            }
        });
    }
});