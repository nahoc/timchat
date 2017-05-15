// imports
import handleChannelSwitch from '../../modules/handle-channel-switch';
import handleMessageInsert from '../../modules/handle-message-insert';
import sortMessages from '../../modules/sort-messages';
//import isTyping from '../../modules/is-typing';
// après la création du template des channels...
Template.channel.onCreated(() => {
    let template = Template.instance();
    // appel de la fonction handleChannelSwitch
    handleChannelSwitch(template);

     Tracker.autorun(function (tracker) {
          if (Meteor.userId() && Streamy.id()) {
              Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.socketSession': Streamy.id()}});
              tracker.stop();
          }
      });

});


// helpers
Template.channel.helpers({
    // si on est en loading
    isLoading() {
            return Template.instance().loading.get();
        }, // si c'est un message direct
        isDirect() {
            return Template.instance().isDirect.get();
        }, username() {
            return FlowRouter.getParam('channel');
        }, messages() {
            let messages = Messages.find({}, {
                sort: {
                    timestamp: 1
                }
            });
            if (messages) {
                return sortMessages(messages);
            }
        }, // fonction pour changer le contenu du placeholder du input principal
        inputPlaceholder() {
            let current = FlowRouter.getParam('channel');
            if (current) {
                if (current[0] == "@") {
                    // on ajoute un "@" devant le nom de la personne
                    // dans le input
                    return "Écrire à " + current;
                }
                else if (current[0] != "@") {
                    // on ajout un "#" devant le nom du channel
                    // dans le input
                    return "Écrire sur #" + current;
                }
            }
        }
});

/* is typing */
var typingTimer;
var doneTypingInterval = 2000;
function doneTyping() {
    Streamy.broadcast('isNotTyping', { data: "" });
}
Streamy.on('isTyping', function(d) {
    let user = Meteor.users.findOne({
        _id: d.__fromUserId
    });
    $('#is-typing').html(user.username + " est en train d'écrire");
});
Streamy.on('isNotTyping', function(d) {
    $('#is-typing').html("");
});

// events
Template.channel.events({
    'keydown [name="message"]' (event, template) {
        handleMessageInsert(event, template);
        Streamy.broadcast('isTyping', { data: "" });
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});