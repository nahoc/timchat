let _insertMessage = ( message ) => {
  return Messages.insert( message );
};

let _escapeUnwantedMarkdown = ( message ) => {
  // Escape h1-h6 tags and inline images ![]() in Markdown.
  return message
  .replace( /#/g, '&#35;' )
  .replace( /(!\[.*?\]\()(.*?)(\))+/g, '&#33;&#91;&#93;&#40;&#41;' );
};

let _cleanUpMessageBeforeInsert = ( message ) => {
  delete message.destination;
  delete message.isDirect;
  message.message = _escapeUnwantedMarkdown( message.message );
};

let _getChannelId = ( channelName ) => {
  let channel = Channels.findOne( { name: channelName } );
  if ( channel ) {
    return channel._id;
  }
};

let _getUserId = ( username ) => {
  let user = Meteor.users.findOne( { username: username } );
  if ( user ) {
    return user._id;
  }
};

let _assignDestination = ( message ) => {
  if ( message.isDirect ) {
    message.to = _getUserId( message.destination );
  } else {
    let channelId = _getChannelId( message.destination );
    message.channel = channelId;
  }
};

let _checkIfSelf = ( { destination, owner } ) => {
  return destination === owner;
};

let _assignOwnerAndTimestamp = ( message ) => {
  message.owner     = Meteor.userId();
  message.timestamp = new Date();
};

export default function( message ) {
  _assignOwnerAndTimestamp( message );

  if ( !_checkIfSelf( message ) ) {
    _assignDestination( message );
    _cleanUpMessageBeforeInsert( message );
    _insertMessage( message );
  } else {
    throw new Meteor.Error( '500', 'Can\'t send messages to yourself.' );
  }
}