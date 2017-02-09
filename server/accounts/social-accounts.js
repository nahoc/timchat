// -------------------------------------------------
// Infos relatives à la création d'un nouveau compte
// -------------------------------------------------

// lors de la création d'un nouvel utilisateur
Accounts.onCreateUser(function (options, user) {
    // facebook informations
    if (user.services.facebook) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.facebook.first_name.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase().trim();
            user.avatar = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
        }
    }

    // twitter informations
    else if (user.services.twitter) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.twitter.screenName.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase().trim();;
            user.avatar = "https://twitter.com/" + user.username + "/profile_image?size=normal";
        }
    }

    // github informations
    else if (user.services.github) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.github.username.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase().trim();;
            user.avatar = "https://avatars3.githubusercontent.com/u/" + user.services.github.id;
        }
    }
    // google informations
    else if (user.services.google) {
        if (options.profile) {
            user.profile = options.profile;
            user.username = user.services.google.given_name.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase().trim();;
            user.avatar = user.services.google.picture;
        }
    }
    
    else {
        // avatar par défaut si on se connecte par email
        user.profile = "email";
        user.avatar = "https://www.biography.com/.image/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTI2NDQwNDA2NTg5MTUwNDgy/ariana-grande-shutterstock_213445195-600x487jpg.jpg";
    }
    
    // thème par défaut
    user.theme = "ember";

    // on retourne les informations du nouvel utilisateur 
    // en fonction de son mode de connexion
    return user;
});