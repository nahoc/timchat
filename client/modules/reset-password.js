let template;

let _handleReset = () => {
    var token = FlowRouter.getParam('token'),
        password = template.find('[name="newPassword"]').value;

    Accounts.resetPassword(token, password, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            Bert.alert('Mot de passe modifié!', 'success');
        }
    });
};

let validation = () => {
    return {
        rules: {
            newPassword: {
                required: true,
                minlength: 6
            },
            repeatNewPassword: {
                required: true,
                minlength: 6,
                equalTo: '[name="newPassword"]'
            }
        },
        messages: {
            newPassword: {
                required: 'Entrez votre nouveau mot de passe.',
                minlength: 'Minimum 6 caractères.'
            },
            repeatNewPassword: {
                required: 'Répétez votre mot de passe.',
                equalTo: 'Les deux mots de passe de sont pas identiques.'
            }
        },
        submitHandler() {
            _handleReset();
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