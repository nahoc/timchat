/*
 ** Routeur lorsqu'on est authentifié
 */
const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated'
});
// création et redirection des différentes routes
authenticatedRoutes.route('/messages/:channel', {
    name: 'channel'
    , action() {
        // par défaut, l'utilisateur sera redirigé vers le channel #general
        BlazeLayout.render('default', {
            yield: 'channel'
        });
    }
});