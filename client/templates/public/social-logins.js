Template.login.events({
    // facebook login event
    'click #facebook-login': function (event) {
        Meteor.loginWithFacebook({}, function (err) {
            if (err) {
                throw new Meteor.Error("La connection Facebook a échoué.");
            }
        });
    },
    // twitter login event
    'click #twitter-login': function (event) {
        Meteor.loginWithTwitter({}, function (err) {
            if (err) {
                throw new Meteor.Error("La connection Twitter a échoué.");
            }
        });
    },
    // google login event
    'click #google-login': function (event) {
        Meteor.loginWithGoogle({}, function (err) {
            if (err) {
                throw new Meteor.Error("La connection Google a échoué.");
            }
        });
    },
    // github login event
    'click #github-login': function (event) {
        Meteor.loginWithGithub({}, function (err) {
            if (err) {
                throw new Meteor.Error("La connection Github a échoué.");
            }
        });
    }
});