/*
 ** Fonction qui nettoie une chaîne de caractère reçue en argument
 ** 1. Met le nom en minuscule
 ** 2. Enlève les caractères spéciaux
 ** 3. Enlève les espaces
 */
export default function(value) {
    return value.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase().trim();
}
