/*
 ** Script qui gère l'insertion des messages côté serveur
 */

// import
import insertMessage from '../../modules/insert-message';

// methods
Meteor.methods({
    insertMessage(message) {
        check(message, {
            destination: String,
            isDirect: Boolean,
            message: String
        });

        try {
            insertMessage(message);
        } catch (exception) {
            throw new Meteor.Error('500', `${ exception }`);
        }
    }
});
