// helpers
Template.header.helpers({
    currentChannel() {
        let current = FlowRouter.getParam('channel');
        if (current) {
            if (current[0] == "@") {
                // on ajoute un "@" devant le nom de la personne
                // dans le header
                return current;
            }
            else if (current[0] != "@") {
                // on ajout un "#" devant le nom du channel
                // dans le header
                return "#" + current;
            }
        }
    }
});