/*
 ** Helper pour le timestamp d'un message
 ** todo: modifier l'afficher pour Canadien Français
 */
Template.registerHelper('messageTimestamp', (timestamp) => {
    if (timestamp) {
        let today = moment().format('DD-MM-YYYY'),
            datestamp = moment(timestamp).format('DD-MM-YYYY'),
            isBeforeToday = moment(today).isAfter(datestamp),
            format = isBeforeToday ? 'MMMM Do, YYYY HH:mm ' : 'HH:mm ';
        return moment(timestamp).format(format);
    }
});
