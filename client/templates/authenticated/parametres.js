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
        event.stopPropagation();
        $(".liste-themes").slideToggle("slow", function () {
            // Animation complete.
        });
    },
    'click .theme-changer': function (event, template) {
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
    },
    'click #notify': function (event, template) {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("Ce navigateur ne support pas les notifications.");
        }

        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var options = {
                icon: "/default.png",
                body: "Les notifications sont maintenant activées!"
            }

            new Notification("#timCHAT", options);
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
            Notification.requestPermission(function (permission) {
                // If the user accepts, let's create a notification
                /*if (permission === "granted") {
                    var options = {
                        icon: "/default.png",
                        body: "message de l'usager"
                    }

                    new Notification("Nom de l'usager", options);
                }*/
                if (permission === "granted") {
                    var options = {
                        icon: "/default.svg",
                        body: "Les notifications sont maintenant activées!"
                    }

                    new Notification("#timCHAT", options);
                }
            });
        }
    }
});