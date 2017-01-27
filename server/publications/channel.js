/*
 ** Publications pour les channel
 */
Meteor.publish('channel', function(isDirect, channel) {
    // on vérifie que isDirect est un boolean
    check(isDirect, Boolean);
    // on vérifie que channel est un string
    check(channel, String);

    // s'il s'agit d'un message direct...
    if (isDirect) {
        let user = Meteor.users.findOne({
            // on ajout un "@" devant le nom de l'utilisateur
            username: channel.replace('@', '')
        });
        return Messages.find({
            $or: [{
                owner: this.userId,
                to: user._id
            }, {
                owner: user._id,
                to: this.userId
            }]
        });;
    }
    // sinon, il s'agit d'un channel
    else {
        let selectedChannel = Channels.findOne({
            name: channel
        });
        return Messages.find({
            channel: selectedChannel._id
        });
    }
});
