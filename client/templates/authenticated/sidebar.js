/*
 ** JS de la sidebar; inclus les subscriptions
 */
// on created
Template.sidebar.onCreated(() => {
    let template = Template.instance();
    // subscribe de la publication "sidebar"
    template.subscribe('sidebar');
    // subscribe de la publication "images"
    template.subscribe('images');
});
// helpers
Template.sidebar.helpers({
    currentChannel(name) {
        let current = FlowRouter.getParam('channel');
        if (current) {
            return current === name || current === `@${ name }` ? 'active' : false;
        }
    }, channelsCount: function () {
        // on compte les channels
        let channels = Channels.find().count();
        if (channels) {
            return channels;
        }
    }, channels() {
        // on recoit les channels
        let channels = Channels.find();
        if (channels) {
            return channels;
        }
    }, usersCount: function () {
        // on compte les users
        let users = Meteor.users.find().count();
        if (users) {
            return users;
        }
    }, connectionStatus: function (userId) {
        if (userId.status) {
            // user est en ligne
            if (userId.status.online) {
                return "statusActive";
            }
        }
        // user est hors ligne
        else {
            return "";
        }
    }, users() {
        // on recoit les users
        let users = Meteor.users.find({
            // on ne veut pas se retrouver dans la liste de tous les users
            _id: {
                $not: Meteor.userId()
            }
        });
        if (users) {
            return (users);
        }
    }, me() {
        // on veut savoir si c'est moi
        let me = Meteor.users.findOne({
            _id: Meteor.userId()
        });
        if (me) {
            return me.username + " (vous)";
        }
    }, fullName(name) {
        if (name) {
            return `${ name.first } ${ name.last }`;
        }
    }
});
// events
Template.sidebar.events({
    'change.myFileInput': function (event, template) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                }
                else {
                    // handle success depending what you need to do
                    var userId = Meteor.userId();
                    var imagesURL = {
                        "profile.image": "/cfs/files / images / " + fileObj._id
                    };
                    Meteor.users.update(userId, {
                        $set: imagesURL
                    });
                }
            });
        });
    }
});