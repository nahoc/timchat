/*
 ** Script qui gère le insert des messages dans le chat
 */
// import
import setScroll from './set-scroll';
import playSound from './play-sound';
let _getMessage = (template) => {
    let message = template.find('[name="message"]').value;
    return message.trim();
};
let _checkIfCanInsert = (message, event) => {
    return message !== '' && event.keyCode === 13;
};
let _buildMessage = (template) => {
    return {
        destination: FlowRouter.getParam('channel').replace('@', '')
        , isDirect: template.isDirect.get()
        , message: template.find('[name="message"]').value
    };
};
let _handleInsert = (message, event, template) => {
    Meteor.call('insertMessage', message, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        }
        else {
            event.target.value = '';
            // son qui est joué lors d'un message
            var isactive = false;
            $(window).focus(function () {
                isactive = true;
            }).blur(function () {
                isactive = false;
            });
            playSound(isactive);
        }
    });
};
export default function (event, template) {
    let text = _getMessage(template)
        , canInsert = _checkIfCanInsert(text, event);
    if (canInsert) {
        setScroll('messages');
        _handleInsert(_buildMessage(template), event, template);
    }
}