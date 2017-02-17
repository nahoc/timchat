// imports
import login from '../../modules/login';

// on rendered
Template.login.onRendered(() => {
    login({
        form: '#login',
        template: Template.instance()
    });

    // reset certaines css de la navigation
    /*$('.barre-nav').css("max-width", "800px");
    $('.navbar-brand').css({
        "padding-left": "0px",
        "background-color": "#fff"
    });*/
});

// events
Template.login.events({
    'submit form': (event) => event.preventDefault()
});