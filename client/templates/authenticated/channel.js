// imports
import handleChannelSwitch from '../../modules/handle-channel-switch';
import handleMessageInsert from '../../modules/handle-message-insert';
import sortMessages from '../../modules/sort-messages';

// après la création du template des channels...
Template.channel.onCreated(() => {
    let template = Template.instance();
    // appel de la fonction handleChannelSwitch
    handleChannelSwitch(template);
});

// helpers
Template.channel.helpers({
    // si on est en loading
    isLoading() {
        return Template.instance().loading.get();
    },
    // si c'est un message direct
    isDirect() {
        return Template.instance().isDirect.get();
    },
    username() {
        return FlowRouter.getParam('channel');
    },
    messages() {
        let messages = Messages.find({}, {
            sort: {
                timestamp: 1
            }
        });
        if (messages) {
            return sortMessages(messages);
        }
    }
});

// events
Template.channel.events({
    'keyup [name="message"]' (event, template) {
        handleMessageInsert(event, template);
    }
});
