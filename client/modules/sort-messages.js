let _getTimeDifference = (previousTime, currentTime) => {
    let previous = moment(previousTime),
        current = moment(currentTime);
    return moment(current).diff(previous, 'minutes');
}

let _checkIfOwner = (previousMessage, message) => {
    return typeof previousMessage !== 'undefined' && previousMessage.owner === message.owner;
};

let _decideIfShowHeader = (previousMessage, message) => {
    if (_checkIfOwner(previousMessage, message)) {
        message.showHeader = _getTimeDifference(previousMessage.timestamp, message.timestamp) >= 5;
    } else {
        message.showHeader = true;
    }
};

let _mapMessages = (messages) => {
    let previousMessage;
    return messages.map((message) => {
        _decideIfShowHeader(previousMessage, message);
        previousMessage = message;
        return message;
    });
};

export default function(messages) {
    return _mapMessages(messages);
}
