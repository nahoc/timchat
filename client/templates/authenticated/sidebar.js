/*
 ** JS de la sidebar; inclus les subscriptions
 */
Template.sidebar.onCreated(function () {
    /*this.autorun(() => {
        this.subscribe('images');
        this.subscribe('sidebar');
    });*/
    let template = Template.instance();
    template.subscribe('images');
    template.subscribe('sidebar');
    template.subscribe('files');
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
        }, {
            sort: {
                username: 1
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
            // on change le theme aussi
            $('body').addClass(me.theme);
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
    'click #ajout-channel': function (event, template) {
        console.log("click");
        $('.ajout-channel').animate({
            'top': 0
        });
    }
    , 'change.myFileInput': function (event, template) {
        // event lors du upload de l'avatar
        event.preventDefault();
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // erreur lors de l'upload de l'avatar
                    console.log("Upload error.");
                    // notification
                    Bert.alert("Problème lors de la mise à jour de l'avatar.", 'danger');
                }
                else {
                    Tracker.autorun(function () {
                        var cursor = Images.find(fileObj._id);
                        var liveQuery = cursor.observe({
                            changed: function (newImage, oldImage) {
                                if (newImage.isUploaded()) {
                                    liveQuery.stop();
                                    console.log("uploaded");
                                    // tout s'est bien passé
                                    var userId = Meteor.userId();
                                    var imagesURL = {
                                        "avatar": fileObj._id
                                    };
                                    Meteor.users.update(userId, {
                                        $set: imagesURL
                                    });
                                    // si social user
                                    let user = Meteor.users.findOne(userId, {
                                        fields: {
                                            'avatar': 1
                                            , 'profile': 1
                                        }
                                    });
                                    if (user.profile) {
                                        Meteor.users.update(userId, {
                                            $set: {
                                                "profile": "null"
                                            }
                                        });
                                    }
                                    Bert.alert("Avatar mis à jour avec succès!", 'success');
                                }
                            }
                        });
                    });
                }
            });
        });
    }
});