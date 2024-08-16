// Fonction pour simuler une attente
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction asynchrone pour simuler la récupération de données
async function waitCall() {
    console.log('Début de la récupération des données...');

    // Simule un délai d'attente de 3 secondes pour la récupération des données
    await wait(3000);

    // Simule les données récupérées après le délai
    const data = { message: 'Données récupérées avec succès' };

    // Enregistre les données
    console.log(data);
}

// Exécution de la fonction
waitCall();