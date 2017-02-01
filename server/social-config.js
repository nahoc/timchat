// configuration du login pour les différents réseaux sociaux
Meteor.startup(function () {
    //twitter
    Accounts.loginServiceConfiguration.remove({
        service: 'twitter'
    });
    ServiceConfiguration.configurations.insert({
        service: 'twitter',
        consumerKey: '7TAsqfG42jf7CEmCMqmNEJNNa',
        secret: 'iUXZegRqfRmcodsguoVtd9NOo4onpBBpG8qWtY1E6kf82t8tec'
    });

    //facebook
    Accounts.loginServiceConfiguration.remove({
        service: 'facebook'
    });
    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: '1831388873748159',
        secret: 'db87bd5502f3c2f468c5153c0c654514'
    });

    //google
    Accounts.loginServiceConfiguration.remove({
        service: 'google'
    });

    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: '576511450307-2c70a27qtk5tg94h0pd4dd0b65kl7l5h.apps.googleusercontent.com',
        secret: '8GqZTiE4uMB79Raj--fBGcy3'
    });

    //github
    Accounts.loginServiceConfiguration.remove({
        service: "github"
    });
    ServiceConfiguration.configurations.insert({
        service: "github",
        clientId: '96ba5b8a80917a29b661',
        clientSecret: 'c465de0a2759393791b0ee6e0493ecb2eb9745e1'
    });
});