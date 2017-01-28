/*
 ** JS de la sidebar; inclus les subscriptions
 */
Template.sidebar.onCreated(() => {
    let template = Template.instance();
    // subscribe de la publication "sidebar"
    template.subscribe('sidebar');
});

Template.sidebar.helpers({
    currentChannel(name) {
        let current = FlowRouter.getParam('channel');
        if (current) {
            return current === name || current === `@${ name }` ? 'active' : false;
        }
    },
    channels() {
        // on recoit les channels
        let channels = Channels.find();
        if (channels) {
            return channels;
        }
    },
    users() {
        // on recoit les users
        let users = Meteor.users.find({
            _id: {
                $not: Meteor.userId()
            }
        });
        if (users) {
            return users;
        }
    },
    fullName(name) {
        if (name) {
            return `${ name.first } ${ name.last }`;
        }
    }
});