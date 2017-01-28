// import
import seed from 'meteor/themeteorchef:seeder';

let _seedChannels = () => {
    seed('channels', {
        environments: ['development', 'staging', 'production'],
        data: [{
            name: 'general'
        }]
    });
};

export default function() {
    _seedChannels();
}
