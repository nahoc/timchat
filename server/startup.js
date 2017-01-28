// import
import seedDatabase from './modules/seed-database';

Meteor.startup( () => {
  seedDatabase();
});
