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
        var newTheme = {
            "theme": themeName
        };
        $('body').removeClass();
        $('body').addClass("is-channel " + themeName);
        //on update le theme
        let me = Meteor.users.findOne({
            _id: Meteor.userId()
        });
        Meteor.users.update({
            _id: me._id
        }, {
            $set: newTheme
        });
    }
});