// -------------------------------------------------
// Infos relatives à la création d'un nouveau compte
// -------------------------------------------------

// lors de la création d'un nouvel utilisateur
Accounts.onCreateUser(function (options, user) {
    // facebook informations
    if (user.services.facebook) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.facebook.first_name;
            user.profile.avatar = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
        }
    }

    // twitter informations
    else if (user.services.twitter) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.twitter.screenName;
            user.profile.avatar = "https://twitter.com/" + user.username + "/profile_image?size=normal";
        }
    }

    // github informations
    else if (user.services.github) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.github.username;
            user.profile.avatar = "https://avatars3.githubusercontent.com/u/" + user.services.github.id;
        }
    }
    // google informations
    else if (user.services.google) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.google.given_name;
            user.profile.avatar = user.services.google.picture;
        }
    }

    // on retourne les informations du nouvel utilisateur 
    // en fonction de son mode de connexion
    return user;
});