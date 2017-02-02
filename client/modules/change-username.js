export default function (username) {
    let newUsername = username;
    Meteor.users.update({
        _id: Meteor.user()._id
    }, {
        $set: {
            "username": newUsername
        }
    });
    Bert.alert("Nom d'usager modifié pour " + newUsername + "!", 'success');
}