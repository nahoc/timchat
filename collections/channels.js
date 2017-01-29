Channels = new Mongo.Collection( 'channels' );

Channels.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Channels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ChannelsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'The name of the channel.'
  }
});

Channels.attachSchema( ChannelsSchema );