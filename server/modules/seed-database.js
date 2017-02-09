// import
import seed from 'meteor/themeteorchef:seeder';
/*let _seedUsers = () => {
    Seed('users', {
        environments: ['development', 'staging', 'production'],
        data: [{
            username: 'bigguy1991',
            email: 'admin@admin.com',
            password: 'password',
            profile: {
                name: {
                    first: 'Carl',
                    last: 'Winslow'
                }
            },
            roles: ['admin']
    }, {
            username: 'beetsfan123',
            email: 'doug@admin.com',
            password: 'password',
            profile: {
                name: {
                    first: 'Doug',
                    last: 'Funnie'
                }
            },
            roles: ['admin']
    }]
    });
};*/
let _seedChannels = () => {
    Seed('channels', {
        environments: ['development', 'staging', 'production']
        , data: [{
            name: 'general'
        }, {
            name: 'random'
        }]
    });
};
let _seedThemes = () => {
    Seed('themes', {
        data: [{
            name: 'ember'
        }, {
            name: 'aubergine'
            , sidebarBackground: '#4D394B'
            , textColor: '#FFFFFF'
            , menuHover: '#3E313C'
            , menuActive: '#38978D'
        }]
    });
};
export default function () {
    /*_seedUsers();*/
    _seedChannels();
    _seedThemes();
}