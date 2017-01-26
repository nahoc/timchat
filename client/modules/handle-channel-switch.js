/*
 ** Fonction qui nettoie une chaîne de caractère reçue en argument
 ** 1. Met le nom en minuscule
 ** 2. Enlève les caractères spéciaux
 ** 3. Enlève les espaces
 */

// import
import setScroll from './set-scroll';

let _establishSubscription = (template, isDirect, channel) => {
    template.subscribe('channel', isDirect, channel, () => {
        setScroll('messages');
        setTimeout(() => {
            template.loading.set(false);
        }, 300);
    });
};

let _handleSwitch = (template) => {
    // on obtient la valeur du channel dans l'URL
    let channel = FlowRouter.getParam('channel');

    if (channel) {
        // si le channel contient un "@" il s'agit d'un message privé
        let isDirect = channel.includes('@');
        template.isDirect.set(isDirect);
        // le template se met en mode "loading"
        template.loading.set(true);
        _establishSubscription(template, isDirect, channel);
    }
};

// création des reactive variables
let _setupReactiveVariables = (template) => {
    template.isDirect = new ReactiveVar();
    template.loading = new ReactiveVar(true);
};

// export
export default function(template) {
    _setupReactiveVariables(template);
    // chaque fois que L'URL change, cette fonction est exécutée
    Tracker.autorun(() => {
        _handleSwitch(template);
    });
}
