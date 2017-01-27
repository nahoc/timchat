/*
 ** Module permettant de calculer le temps d'interval entre 2 messages du même utilisateurs
 ** Si les messages sont postés à interval inférieur à 5 mins et par la même personne
 ** on ne répète pas l'affichage du header (la photo, le nom est l'heure du message)
 */

// calcul de la différence entre les deux temps
let _getTimeDifference = (previousTime, currentTime) => {
    let previous = moment(previousTime),
        current = moment(currentTime);
    return moment(current).diff(previous, 'minutes');
}

// on vérifie si le message précédent est par la même personne
let _checkIfOwner = (previousMessage, message) => {
    return typeof previousMessage !== 'undefined' && previousMessage.owner === message.owner;
};

// fonction qui décide si on affiche le header ou non
let _decideIfShowHeader = (previousMessage, message) => {
    if (_checkIfOwner(previousMessage, message)) {
        message.showHeader = _getTimeDifference(previousMessage.timestamp, message.timestamp) >= 5;
    } else {
        message.showHeader = true;
    }
};

let _mapMessages = (messages) => {
    // variable temporaire
    let previousMessage;
    // retourne le dernier message et l'assigne à notre variable temporaire
    return messages.map((message) => {
        _decideIfShowHeader(previousMessage, message);
        previousMessage = message;
        return message;
    });
};

// export
export default function(messages) {
    return _mapMessages(messages);
}
