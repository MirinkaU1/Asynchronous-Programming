// Fonction pour simuler une attente
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Trois fonctions asynchrones distinctes
async function firstFunction() {
    await wait(1000);
    console.log('Première fonction exécutée après 1 seconde');
}

async function secondFunction() {
    await wait(1000);
    console.log('Deuxième fonction exécutée après 2 secondes');
}

async function thirdFunction() {
    await wait(1000);
    console.log('Troisième fonction exécutée après 3 secondes');
}

// Fonction pour enchaîner les trois fonctions
async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}

// Exécution de la fonction
chainedAsyncFunctions();