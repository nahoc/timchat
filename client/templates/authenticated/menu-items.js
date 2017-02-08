/*
 ** JS des paramètres
 */
// helpers
Template.menuItems.helpers({

});
// on created
Template.menuItems.onCreated(() => {
    let template = Template.instance();
    // reset certaines css de la navigation
    $('.barre-nav').css("max-width", "100%");
    $('.navbar-brand').css({
        "padding-left": "20px"
        , "background-color": "#FAF4F1"
    });
});