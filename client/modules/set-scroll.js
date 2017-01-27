/*
 ** Fonction qui scroll le chat à chaque fois qu'on change de channel
 */
export default function(containerId) {
    let messages = document.getElementById(containerId);
    setTimeout(() => {
        // scrollTop en fonction de la hauteur des messages
        messages.scrollTop = messages.scrollHeight;
    }, 300);
}
