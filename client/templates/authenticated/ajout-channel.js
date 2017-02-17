// imports
import cleanupUsername from '../../modules/cleanup-username';
// events
Template.ajoutChannel.events({
    'click #btn-channel-insert' (event, template) {
        event.preventDefault();
        var channelName = $('#channel-name').val();
        if (channelName.length < 6) {
            // alert
            Bert.alert("Nom du channel trop court! (minimum 6 caractères)", 'danger');
        }
        else {
            // on efface le champ input du nouveau channel
            $('#channel-name').val("");
            // on cache la fenêtre
            $('.ajout-channel').animate({
                'top': "100vh"
            });
            Channels.insert({
                name: channelName
            });
            // alert
            Bert.alert("Nouveau channel " + channelName + " créé avec succès!", 'success');
        }
    }, 'click #cancel-channel-add': function (event, template) {
        event.preventDefault();
        // on efface le champ input du nouveau channel
        $('#channel-name').val("");
        // on cache la fenêtre
        $('.ajout-channel').animate({
            'top': "100vh"
        });
    }, 'keyup #channel-name' (event) {
        // clean the username
        let value = event.target.value
            , formatted = cleanupUsername(value);
        event.target.value = formatted;
    }
});