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
        environments: ['development', 'staging', 'production']
        , data: [{
            name: 'ember'
            , sidebarBackground: '#FAF4F1'
            , textColor: '#717171'
            , menuHover: '#EDE5E0'
            , menuActive: '#E77562'
            , statusActive: '#E77562'
            , textColorActive: '#FFFFFF'
        }, {
            name: 'aubergine'
            , sidebarBackground: '#4D394B'
            , textColor: '#FFFFFF'
            , menuHover: '#3E313C'
            , menuActive: '#38978D'
            , statusActive: '#38978D'
            , textColorActive: '#FFFFFF'
        }, {
            name: 'dark'
            , sidebarBackground: '#282A36'
            , textColor: '#FFFFFF'
            , menuHover: '#44475A'
            , menuActive: '#6272A4'
            , statusActive: '#FFFFFF'
            , textColorActive: '#FFFFFF'
        }, {
            name: 'vue'
            , sidebarBackground: '#34495E'
            , textColor: '#FFFFFF'
            , menuHover: '#42B983'
            , menuActive: '#42B983'
            , statusActive: '#FFD41D'
            , textColorActive: '#FFFFFF'
        }]
    });
};
export default function () {
    /*_seedUsers();*/
    _seedChannels();
    _seedThemes();
}