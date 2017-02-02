let template;

// fonction qui gère l'inscription du nouvel utilisateur
let _handleSignup = () => {
    // attributs de notre nouvel utilisateur
    let user = {
        username: template.find('[name="username"]').value,
        email: template.find('[name="emailAddress"]').value,
        password: template.find('[name="password"]').value,
        profile: {
            name: {
                first: template.find('[name="firstName"]').value,
                last: template.find('[name="lastName"]').value
            }
        }
    };

    // affichage d'un message de bienvenue
    Accounts.createUser(user, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            Bert.alert('Bienvenue!', 'success');
        }
    });
};

// fonction de validation
let validation = () => {
    return {
        // règles
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            username: {
                required: true,
                // minimum 6 caractères
                minlength: 6,
                // minimum 20 caractères
                maxlength: 16
            },
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: true,
                // minimum 6 caractères
                minlength: 6
            }
        },
        // messages d'erreurs
        messages: {
            firstName: {
                required: 'Quel est votre prénom?'
            },
            lastName: {
                required: 'Quel est votre nom de famille?'
            },
            username: {
                required: "Quel nom d'utilisateur aimeriez-vous?"
            },
            emailAddress: {
                required: "L'adresse e-mail est requise.",
                email: 'Adresse e-mail non valide.'
            },
            password: {
                required: 'Veuillez entrer un mot de passe.',
                minlength: 'Le mot de passe doit contenir au moins 6 caractères.'
            }
        },
        errorPlacement(error, element) {
            if (element.attr('name') === 'username') {
                error.insertAfter('.input-group.username');
            }
        },
        submitHandler() {
            _handleSignup();
        }
    };
};

let _validate = (form) => {
    $(form).validate(validation());
};

// export
export default function (options) {
    template = options.template;
    _validate(options.form);
}