/*
 ** Helper pour le timestamp d'un message
 ** todo: modifier l'afficher pour Canadien Français
 */
Template.registerHelper('messageTimestamp', (timestamp) => {
    if (timestamp) {
        let today = moment().format('YYYY-MM-DD'),
            datestamp = moment(timestamp).format('YYYY-MM-DD'),
            isBeforeToday = moment(today).isAfter(datestamp),
            format = isBeforeToday ? 'MMMM Do, YYYY hh:mm a' : 'hh:mm a';
        return moment(timestamp).format(format);
    }
});
