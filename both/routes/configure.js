// config de Blaze
FlowRouter.notFound = {
    action() {
        BlazeLayout.render('default', {
            yield: 'notFound'
        });
    }
};