// imports
import signup from '../../modules/signup';
import sanitizeUsername from '../../modules/cleanup-username';

// après le rendu du template de création d'usager...
Template.signup.onRendered(() => {
    signup({
        form: '#signup',
        template: Template.instance()
    });
});

// events
Template.signup.events({
    'submit form': (event) => event.preventDefault(),
    'keyup [name="username"]' (event) {
        let value = event.target.value,
            formatted = sanitizeUsername(value);
        event.target.value = formatted;
    }
});
