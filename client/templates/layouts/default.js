/*
 ** Layout par défaut
 */
const handleRedirect = (routes, redirect) => {
    let currentRoute = FlowRouter.getRouteName();
    if (routes.indexOf(currentRoute) > -1) {
        FlowRouter.go(redirect);
        return true;
    }
};

// après le rendu du template de layout par défaut...
Template.default.onRendered(() => {
    Tracker.autorun(() => {
        let isChannel = FlowRouter.getParam('channel'),
            bodyClasses = document.body.classList;
        // s'il y a présence d'un channel dans l'URL, on ajoute la classe "isChannel" au body...
        // sinon, on l'enlève
        return isChannel ? bodyClasses.add('is-channel') : bodyClasses.remove('is-channel');
    });
});

Template.default.helpers({
    loggingIn() {
        return Meteor.loggingIn();
    },
    authenticated() {
        return !Meteor.loggingIn() && Meteor.user();
    },
    redirectAuthenticated() {
        // redirections...
        return handleRedirect([
            'login',
            'signup',
            'recover-password',
            'reset-password'
        ], '/messages/general');
    },
    redirectPublic() {
        // si on est pas connecté, redirection vers la page de login
        return handleRedirect(['channel'], '/login');
    }
});
