// imports
import handleChannelSwitch from '../../modules/handle-channel-switch';

Template.channel.onCreated(() => {
    let template = Template.instance();
    handleChannelSwitch(template);
});
