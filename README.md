# Async/Await Functions - README

## Introduction

Ce repository contient trois fonctions asynchrones écrites en JavaScript pour démontrer l'utilisation d'`async/await`. Les tâches abordées sont les suivantes :
- Itération avec `async/await`
- Attente d'un appel simulé
- Enchaînement `async/await`

## Fonctions Implémentées

### 1. `iterateWithAsyncAwait`

#### Description
La fonction `iterateWithAsyncAwait` prend un tableau de valeurs et affiche chaque valeur avec un délai d'une seconde entre les affichages. Cette fonction utilise `async/await` pour gérer le délai entre chaque affichage.

#### Code

```javascript
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}
```

#### Explication
- La fonction est asynchrone et itère sur chaque élément du tableau `values`.
- Pour chaque valeur, elle attend une seconde (`setTimeout` est utilisé pour simuler l'attente) avant de l'afficher dans la console.

#### Utilisation

```javascript
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
```

### 2. `waitCall`

#### Description
La fonction `waitCall` simule la récupération de données à partir d'une API. Elle utilise une fonction de `wait` pour introduire un délai d'attente avant de simuler le retour des données.

#### Code

```javascript
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitCall() {
    console.log('Début de la récupération des données...');
    await wait(3000);
    const data = { message: 'Données récupérées avec succès' };
    console.log(data);
}
```

#### Explication
- La fonction `wait(ms)` crée une promesse qui se résout après un délai de `ms` millisecondes.
- `waitCall` attend 3 secondes avant de simuler la réception de données et d'afficher ces données dans la console.

#### Utilisation

```javascript
waitCall();
```

### 3. `chainedAsyncFunctions`

#### Description
La fonction `chainedAsyncFunctions` appelle séquentiellement trois fonctions asynchrones distinctes, chacune enregistrant un message après un délai d'une seconde.

#### Code

```javascript
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

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}
```

#### Explication
- Chaque fonction (`firstFunction`, `secondFunction`, `thirdFunction`) attend une seconde avant d'enregistrer un message spécifique dans la console.
- La fonction `chainedAsyncFunctions` enchaîne ces trois fonctions de manière séquentielle, garantissant que chacune se termine avant de passer à la suivante.

#### Utilisation

```javascript
chainedAsyncFunctions();
```
