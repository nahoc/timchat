let template;

let _handleRecovery = () => {
    let email = template.find('[name="emailAddress"]').value;

    Accounts.forgotPassword({
        email: email
    }, (error) => {
        if (error) {
            Bert.alert(error.reason, 'warning');
        } else {
            Bert.alert('Vérifiez votre boite courriel!', 'success');
        }
    });
};

let validation = () => {
    return {
        rules: {
            emailAddress: {
                required: true,
                email: true
            }
        },
        messages: {
            emailAddress: {
                required: 'Veuillez entrer votre adresse courriel.',
                email: 'Adresse courriel non valide.'
            }
        },
        submitHandler() {
            _handleRecovery();
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