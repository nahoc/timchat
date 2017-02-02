let template;

let _handleLogin = () => {
    let email = template.find('[name="emailAddress"]').value,
        password = template.find('[name="password"]').value;

    Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
            Bert.alert(error.reason, 'warning');
        } else {
            Bert.alert('Connecté!', 'success');
        }
    });
};

let validation = () => {
    return {
        rules: {
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            emailAddress: {
                required: 'Veuillez entrer une adresse courriel valide.',
                email: 'Adresse non valide'
            },
            password: {
                required: 'Veuillez entrer un mot de passe.'
            }
        },
        submitHandler() {
            _handleLogin();
        }
    };
};

let _validate = (form) => {
    $(form).validate(validation());
};

export default function (options) {
    template = options.template;
    _validate(options.form);
}