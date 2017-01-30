// helpers
Template.message.helpers({
    name(userId) {
        if (userId) {
            let user = Meteor.users.findOne(userId, {
                fields: {
                    'username': 1
                }
            });
            return user.username;
        }
    }, avatar(userId) {
        if (userId) {
            let user = Meteor.users.findOne({
                _id: userId
            });
            if (user.profile) {
                return user.profile.avatar;
            } else {
                return "/default.png";
            }
        }
    }
});

// events
Template.message.events({
    'click a' (event) {
        event.preventDefault();
        window.open(event.target.href, '_blank');
    }
});