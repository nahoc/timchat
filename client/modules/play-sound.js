/*
 ** Fonction qui scroll le chat à chaque fois qu'on change de channel
 */
export default function (isActive) {
    var son = new buzz.sound('/sons/son1.ogg');
    if (isActive) return;
    son.play();
}