/*
 ** JS de la sidebar; inclus les subscriptions
 */
// on created
Template.parametres.onCreated(function () {
    this.autorun(() => {
        this.subscribe('themes');
    });
});
// helpers
Template.parametres.helpers({
    themes() {
        // on recoit les channels
        let themes = Themes.find();
        if (themes) {
            return themes;
        }
    }
});
// events
Template.parametres.events({
    'click #onglet-theme': function (event, template) {
        console.log("click");
        event.preventDefault();
        $(".liste-themes").slideToggle("slow", function () {
            // Animation complete.
        });
    }
    , 'click .theme-changer': function (event, template) {
        // event lors du changement de theme
        var themeName = event.target.id;
        let theme = Themes.findOne({
            name: themeName
        });
        var sidebarBackground = theme.sidebarBackground;
        var textColor = theme.textColor;
        var menuHover = theme.menuHover;
        var menuActive = theme.menuActive;
        var textColorActive = theme.textColorActive;
        var statusActive = theme.statusActive;
        var statusActiveWhenActive = theme.statusActiveWhenActive;
        // changement du CSS pour fit avec le theme
        $('.navbar-brand').css({
            "background": sidebarBackground
            , "color": textColor
        });
        $('.sidebar').css("background", sidebarBackground);
        $('.sidebar h5').css("color", textColor);
        $('.sidebar ul li a').css("color", textColor);
        $('.sidebar p').css("color", textColor);
        $('.statusActive').css("background-color", statusActive);
        $('head').append('<style>.sidebar ul li.active a {background :' + menuActive + ';color:' + textColorActive + '!important;} .sidebar ul li.active a:hover{background:'+menuActive+'!important;}.sidebar ul li.active a span.statusActive{background:' + statusActiveWhenActive + '!important;}.sidebar a:hover {background :' + menuHover + '}</style>')
    }
});