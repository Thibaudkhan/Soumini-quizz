let userResponses = {};  // Un objet pour stocker les réponses de chaque axe


const questions = [
    {
        axe: "Ordre vs Chaos",
        q1: "Je préfère que tout soit bien organisé et sous contrôle.",
        q2: "Je me sens à l'aise lorsque les situations sont imprévisibles et que tout ne suit pas forcément un plan."
    },
    {
        axe: "Esprit vs Corps",
        q1: "Je me sens plus à l’aise dans un domaine intellectuel ou spirituel que dans des activités physiques.",
        q2: "Je préfère utiliser mon corps et agir physiquement plutôt que de réfléchir ou méditer."
    },
    {
        axe: "Tradition vs Innovation",
        q1: "Je respecte les traditions et pense qu'elles doivent être conservées.",
        q2: "Je pense que l’innovation et le changement sont essentiels pour progresser."
    },
    {
        axe: "Social vs Solitaire",
        q1: "Je me sens plus à l'aise en travaillant en groupe qu'en travaillant seul.",
        q2: "Je préfère travailler seul et m'appuyer sur mes propres compétences plutôt que de dépendre des autres."
    },
    {
        axe: "Nature vs Technologie",
        q1: "Je me sens plus proche de la nature que de la technologie.",
        q2: "La technologie est essentielle à ma vie, plus que mon lien avec la nature."
    },
    {
        axe: "Lumière vs Ténèbres",
        q1: "Je valorise la justice, la morale, et la lumière au-dessus de tout.",
        q2: "Je pense que la force ou les ténèbres sont nécessaires pour obtenir ce que l'on veut dans ce monde."
    },
    {
        axe: "Survie vs Confort",
        q1: "Je suis plus concerné par ma survie que par mon confort quotidien.",
        q2: "Je préfère être à l’aise et en sécurité plutôt que de devoir me battre pour survivre."
    },
    {
        axe: "Individualisme vs Collectivisme",
        q1: "Je préfère prendre mes décisions seul plutôt que de m'aligner avec les besoins d'un groupe.",
        q2: "Je pense qu’il est essentiel de prendre en compte les besoins du groupe avant ses propres désirs."
    },
    {
        axe: "Aventure vs Sécurité",
        q1: "Je préfère explorer l'inconnu plutôt que rester dans un environnement sécurisé.",
        q2: "Je me sens plus à l'aise dans un cadre familier et sécurisé plutôt que de m'aventurer dans l'inconnu."
    }
];

const subracesProfiles = {
    "Néandains Aïjitiens": {
        "Ordre vs Chaos": 7,
        "Esprit vs Corps": 6,
        "Tradition vs Innovation": 8,
        "Social vs Solitaire": 5,
        "Nature vs Technologie": 3,
        "Lumière vs Ténèbres": 5,
        "Survie vs Confort": 3,
        "Individualisme vs Collectivisme": 6,
        "Aventure vs Sécurité": 3
    },
    "Néandains Itérannéens": {
        "Ordre vs Chaos": 4,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 6,
        "Nature vs Technologie": 2,
        "Lumière vs Ténèbres": 4,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 2
    },
    "Cyborgs": {
        "Ordre vs Chaos": 6,
        "Esprit vs Corps": 7,
        "Tradition vs Innovation": -10,
        "Social vs Solitaire": 0,
        "Nature vs Technologie": -10,
        "Lumière vs Ténèbres": 0,
        "Survie vs Confort": 6,
        "Individualisme vs Collectivisme": -4,
        "Aventure vs Sécurité": -3
    },
    "Gokus": {
        "Ordre vs Chaos": -3,
        "Esprit vs Corps": 3,
        "Tradition vs Innovation": 2,
        "Social vs Solitaire": -4,
        "Nature vs Technologie": 9,
        "Lumière vs Ténèbres": 1,
        "Survie vs Confort": 9,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 7
    },
    "Haut-Jarde": {
        "Ordre vs Chaos": 6,
        "Esprit vs Corps": 8,
        "Tradition vs Innovation": 7,
        "Social vs Solitaire": 4,
        "Nature vs Technologie": 3,
        "Lumière vs Ténèbres": 4,
        "Survie vs Confort": 4,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 3
    },
    "Jarde d'Argent": {
        "Ordre vs Chaos": 5,
        "Esprit vs Corps": 7,
        "Tradition vs Innovation": 6,
        "Social vs Solitaire": 3,
        "Nature vs Technologie": 5,
        "Lumière vs Ténèbres": 3,
        "Survie vs Confort": 7,
        "Individualisme vs Collectivisme": 6,
        "Aventure vs Sécurité": 4
    },
    "Jarde d'Orée": {
        "Ordre vs Chaos": 6,
        "Esprit vs Corps": 7,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 6,
        "Nature vs Technologie": 7,
        "Lumière vs Ténèbres": 6,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 3,
        "Aventure vs Sécurité": 2
    },
    "Jarde de Sang": {
        "Ordre vs Chaos": -4,
        "Esprit vs Corps": 6,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": -3,
        "Nature vs Technologie": 1,
        "Lumière vs Ténèbres": -8,
        "Survie vs Confort": 3,
        "Individualisme vs Collectivisme": 8,
        "Aventure vs Sécurité": 4
    },
    "Ange": {
        "Ordre vs Chaos": 8,
        "Esprit vs Corps": 10,
        "Tradition vs Innovation": 7,
        "Social vs Solitaire": 6,
        "Nature vs Technologie": 3,
        "Lumière vs Ténèbres": 10,
        "Survie vs Confort": 3,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 2
    },
    "Ange Noir": {
        "Ordre vs Chaos": 3,
        "Esprit vs Corps": 7,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 4,
        "Nature vs Technologie": 4,
        "Lumière vs Ténèbres": -5,
        "Survie vs Confort": 4,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 3
    },
    "Ange Floral": {
        "Ordre vs Chaos": 3,
        "Esprit vs Corps": 9,
        "Tradition vs Innovation": 6,
        "Social vs Solitaire": 5,
        "Nature vs Technologie": 8,
        "Lumière vs Ténèbres": 3,
        "Survie vs Confort": 2,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 4
    },
    "Harfang": {
        "Ordre vs Chaos": 0,
        "Esprit vs Corps": 6,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": 3,
        "Nature vs Technologie": 4,
        "Lumière vs Ténèbres": 2,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 6
    },
    "Tritons": {
        "Ordre vs Chaos": 6,
        "Esprit vs Corps": 3,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 4,
        "Nature vs Technologie": 7,
        "Lumière vs Ténèbres": 4,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 3
    },
    "Démons": {
        "Ordre vs Chaos": -10,
        "Esprit vs Corps": 3,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": -3,
        "Nature vs Technologie": 2,
        "Lumière vs Ténèbres": -10,
        "Survie vs Confort": 6,
        "Individualisme vs Collectivisme": 8,
        "Aventure vs Sécurité": 5
    },
    "Siréens": {
        "Ordre vs Chaos": 5,
        "Esprit vs Corps": 7,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": 6,
        "Nature vs Technologie": 7,
        "Lumière vs Ténèbres": 6,
        "Survie vs Confort": 4,
        "Individualisme vs Collectivisme": 3,
        "Aventure vs Sécurité": 2
    },
    "Hommes-Fruits": {
        "Ordre vs Chaos": -7,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 2,
        "Social vs Solitaire": -3,
        "Nature vs Technologie": 5,
        "Lumière vs Ténèbres": -2,
        "Survie vs Confort": 7,
        "Individualisme vs Collectivisme": 8,
        "Aventure vs Sécurité": 6
    },
    "Spirit": {
        "Ordre vs Chaos": 4,
        "Esprit vs Corps": 10,
        "Tradition vs Innovation": 7,
        "Social vs Solitaire": 3,
        "Nature vs Technologie": 4,
        "Lumière vs Ténèbres": 6,
        "Survie vs Confort": 4,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 3
    },
    "Astra": {
        "Ordre vs Chaos": 4,
        "Esprit vs Corps": 9,
        "Tradition vs Innovation": 7,
        "Social vs Solitaire": 4,
        "Nature vs Technologie": 5,
        "Lumière vs Ténèbres": 7,
        "Survie vs Confort": 3,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 2
    },
    "Ascibe": {
        "Ordre vs Chaos": 1,
        "Esprit vs Corps": 6,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": -2,
        "Nature vs Technologie": 8,
        "Lumière vs Ténèbres": 3,
        "Survie vs Confort": 8,
        "Individualisme vs Collectivisme": 3,
        "Aventure vs Sécurité": 5
    },
    "Orc": {
        "Ordre vs Chaos": -4,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 2,
        "Social vs Solitaire": -4,
        "Nature vs Technologie": 6,
        "Lumière vs Ténèbres": -1,
        "Survie vs Confort": 9,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 7
    },
    "Fée-Luciole": {
        "Ordre vs Chaos": 4,
        "Esprit vs Corps": 7,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 6,
        "Nature vs Technologie": 8,
        "Lumière vs Ténèbres": 5,
        "Survie vs Confort": 4,
        "Individualisme vs Collectivisme": 3,
        "Aventure vs Sécurité": 5
    },
    "Humaracnée": {
        "Ordre vs Chaos": -3,
        "Esprit vs Corps": 5,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": -5,
        "Nature vs Technologie": 7,
        "Lumière vs Ténèbres": -4,
        "Survie vs Confort": 6,
        "Individualisme vs Collectivisme": 7,
        "Aventure vs Sécurité": 4
    },
    "Goliath": {
        "Ordre vs Chaos": 1,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": 3,
        "Nature vs Technologie": 6,
        "Lumière vs Ténèbres": 2,
        "Survie vs Confort": 9,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 6
    },
    "Champ'utin": {
        "Ordre vs Chaos": 4,
        "Esprit vs Corps": 6,
        "Tradition vs Innovation": 7,
        "Social vs Solitaire": 2,
        "Nature vs Technologie": 9,
        "Lumière vs Ténèbres": 5,
        "Survie vs Confort": 3,
        "Individualisme vs Collectivisme": 3,
        "Aventure vs Sécurité": 2
    },
    "Sobéïdes": {
        "Ordre vs Chaos": 7,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 6,
        "Social vs Solitaire": 3,
        "Nature vs Technologie": 4,
        "Lumière vs Ténèbres": 2,
        "Survie vs Confort": 8,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 4
    },
    "Serpéïdes": {
        "Ordre vs Chaos": -5,
        "Esprit vs Corps": 4,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": -4,
        "Nature vs Technologie": 3,
        "Lumière vs Ténèbres": -3,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 7,
        "Aventure vs Sécurité": 6
    },
    "Tortéïdes": {
        "Ordre vs Chaos": 5,
        "Esprit vs Corps": 3,
        "Tradition vs Innovation": 6,
        "Social vs Solitaire": 2,
        "Nature vs Technologie": 7,
        "Lumière vs Ténèbres": 4,
        "Survie vs Confort": 9,
        "Individualisme vs Collectivisme": 3,
        "Aventure vs Sécurité": 3
    },
    "Drakéïdes": {
        "Ordre vs Chaos": 6,
        "Esprit vs Corps": 5,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": 4,
        "Nature vs Technologie": 4,
        "Lumière vs Ténèbres": 3,
        "Survie vs Confort": 7,
        "Individualisme vs Collectivisme": 6,
        "Aventure vs Sécurité": 5
    },
    "Hobgobelin": {
        "Ordre vs Chaos": 6,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 3,
        "Nature vs Technologie": 3,
        "Lumière vs Ténèbres": 2,
        "Survie vs Confort": 7,
        "Individualisme vs Collectivisme": 5,
        "Aventure vs Sécurité": 4
    },
    "Kobold": {
        "Ordre vs Chaos": -3,
        "Esprit vs Corps": 3,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": -3,
        "Nature vs Technologie": 2,
        "Lumière vs Ténèbres": -2,
        "Survie vs Confort": 6,
        "Individualisme vs Collectivisme": 7,
        "Aventure vs Sécurité": 5
    },
    "Ratbelin": {
        "Ordre vs Chaos": -4,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": -4,
        "Nature vs Technologie": 2,
        "Lumière vs Ténèbres": -3,
        "Survie vs Confort": 8,
        "Individualisme vs Collectivisme": 6,
        "Aventure vs Sécurité": 6
    },
    "Froguelin": {
        "Ordre vs Chaos": 2,
        "Esprit vs Corps": 4,
        "Tradition vs Innovation": 3,
        "Social vs Solitaire": 2,
        "Nature vs Technologie": 5,
        "Lumière vs Ténèbres": 1,
        "Survie vs Confort": 6,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 3
    },
    "Élémentaire de feu": {
        "Ordre vs Chaos": -6,
        "Esprit vs Corps": 2,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": -3,
        "Nature vs Technologie": 3,
        "Lumière vs Ténèbres": -4,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 6,
        "Aventure vs Sécurité": 7
    },
    "Élémentaire d'air": {
        "Ordre vs Chaos": -5,
        "Esprit vs Corps": 5,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": -3,
        "Nature vs Technologie": 4,
        "Lumière vs Ténèbres": 1,
        "Survie vs Confort": 5,
        "Individualisme vs Collectivisme": 6,
        "Aventure vs Sécurité": 6
    },
    "Élémentaire d'eau": {
        "Ordre vs Chaos": 3,
        "Esprit vs Corps": 5,
        "Tradition vs Innovation": 4,
        "Social vs Solitaire": 2,
        "Nature vs Technologie": 5,
        "Lumière vs Ténèbres": 2,
        "Survie vs Confort": 4,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 3
    },
    "Élémentaire de terre": {
        "Ordre vs Chaos": 5,
        "Esprit vs Corps": 3,
        "Tradition vs Innovation": 5,
        "Social vs Solitaire": 2,
        "Nature vs Technologie": 6,
        "Lumière vs Ténèbres": 2,
        "Survie vs Confort": 6,
        "Individualisme vs Collectivisme": 4,
        "Aventure vs Sécurité": 2
    }
};


let currentIndex = 0;

function updateQuestions() {
    const axeTitle = document.getElementById("axe-title");
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const questionCounter = document.getElementById("question-counter");

    // Mettre à jour le titre et les questions
    axeTitle.innerText = questions[currentIndex].axe;
    question1.innerText = questions[currentIndex].q1;
    question2.innerText = questions[currentIndex].q2;
    questionCounter.innerText = `(${currentIndex + 1}/${questions.length})`;

    // Restaurer les réponses précédentes si elles existent
    if (userResponses[currentIndex]) {
        document.querySelector(`input[name="q1"][value="${userResponses[currentIndex].q1}"]`).checked = true;
        document.querySelector(`input[name="q2"][value="${userResponses[currentIndex].q2}"]`).checked = true;
    } else {
        document.querySelectorAll('input[name="q1"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[name="q2"]').forEach(input => input.checked = false);
    }

    // Gérer l'affichage des boutons "Précédent", "Suivant" et "Terminer"
    document.getElementById("prev-btn").disabled = currentIndex === 0;

    // Si l'utilisateur est sur la dernière question, cacher "Suivant" et montrer "Terminer"
    if (currentIndex === questions.length - 1) {
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("finish-btn").style.display = "inline-block";
    } else {
        document.getElementById("next-btn").style.display = "inline-block";
        document.getElementById("finish-btn").style.display = "none";
    }
}


function next() {
    console.log("currentIndex");
    console.log(currentIndex);
    console.log(questions.length);
    if (currentIndex < questions.length - 1) {
        storeResponse();  // Stocker les réponses actuelles
        currentIndex++;
        updateQuestions();  // Mettre à jour les questions et les boutons
    }
    // else {
    //     // Afficher le bouton "Terminer" et cacher "Suivant"
    //     document.getElementById("next-btn").style.display = "none";
    //     document.getElementById("finish-btn").style.display = "inline-block";
    // }
}

function finishTest() {
    storeResponse();  // Stocker la dernière réponse
    const finalScores = calculateFinalScore();  // Calculer les scores

    // Calculer les 5 sous-races avec la différence minimale
    const top5ByDifference = compareWithSubraces(finalScores);

    // Calculer les 5 sous-races avec les gros points en commun
    const top5ByHighSimilarity = compareByHighSimilarity(finalScores);

    // Afficher les deux types de résultats
    displayResults(top5ByDifference, top5ByHighSimilarity, finalScores);
}

function quickTest() {
    // Pré-remplir les réponses avec des valeurs fictives pour chaque question
    for (let i = 0; i < questions.length; i++) {
        userResponses[i] = {
            q1: Math.floor(Math.random() * 11) - 5, // Génère des réponses entre -5 et 5
            q2: Math.floor(Math.random() * 11) - 5  // Génère des réponses entre -5 et 5
        };
    }

    // Calculer les scores avec les réponses pré-remplies
    const finalScores = calculateFinalScore();

    // Calculer les 5 sous-races avec la différence minimale
    const top5ByDifference = compareWithSubraces(finalScores);

    // Calculer les 5 sous-races avec les gros points en commun
    const top5ByHighSimilarity = compareByHighSimilarity(finalScores);

    // Afficher les résultats pré-remplis
    displayResults(top5ByDifference, top5ByHighSimilarity, finalScores);
}

function refreshPage() {
    window.location.reload();  // Recharger la page actuelle
}

function displayResults(topSubraces, topByHighSimilarity, finalScores) {
    const closestTableBody = document.querySelector('#closest-subraces-table tbody');
    const similarTableBody = document.querySelector('#similar-subraces-table tbody');
    const finalScoresTableHead = document.querySelector('#final-scores-table thead tr');
    const finalScoresTableBody = document.querySelector('#final-scores-table tbody tr');

    // Vider les tableaux avant d'ajouter de nouveaux résultats
    closestTableBody.innerHTML = '';
    similarTableBody.innerHTML = '';
    finalScoresTableHead.innerHTML = '';
    finalScoresTableBody.innerHTML = '';

    // Remplir le tableau des sous-races les plus proches avec un classement continu
    let position = 1;
    let displayedPosition = 0;

    topSubraces.forEach((result, index) => {
        const row = document.createElement('tr');
        if (index === 0 || result.difference !== topSubraces[index - 1].difference) {
            displayedPosition++;
        }

        row.innerHTML = `
            <td>${displayedPosition}</td>
            <td>${result.subrace}</td>
            <td>${result.difference}</td>
        `;
        closestTableBody.appendChild(row);
        position++;
    });

    // Remplir le tableau des sous-races avec les plus gros points communs avec un classement continu
    position = 1;
    displayedPosition = 0;

    topByHighSimilarity.forEach((result, index) => {
        const row = document.createElement('tr');
        if (index === 0 || result.commonScore !== topByHighSimilarity[index - 1].commonScore) {
            displayedPosition++;
        }

        row.innerHTML = `
            <td>${displayedPosition}</td>
            <td>${result.subrace}</td>
            <td>${result.commonScore}</td>
        `;
        similarTableBody.appendChild(row);
        position++;
    });

    // Afficher les scores finaux dans un tableau avec les en-têtes des axes
    const axes = Object.keys(finalScores);  // Récupérer les noms des axes
    axes.forEach((axe) => {
        // Ajouter les en-têtes des axes
        const th = document.createElement('th');
        th.innerText = axe;
        finalScoresTableHead.appendChild(th);

        // Ajouter les scores finaux
        const td = document.createElement('td');
        td.innerText = finalScores[axe];
        finalScoresTableBody.appendChild(td);
    });

    // Afficher les résultats
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';

    const finalScoresContainer = document.getElementById('final-scores-container');
    finalScoresContainer.style.display = 'block';

    createRadarChart(finalScores);

}

function previous() {
    if (currentIndex > 0) {
        storeResponse();  // Stocker les réponses actuelles
        currentIndex--;
        updateQuestions();
    }
}

function storeResponse() {
    const q1Value = document.querySelector('input[name="q1"]:checked');
    const q2Value = document.querySelector('input[name="q2"]:checked');

    // Si des réponses sont sélectionnées, les stocker dans l'objet
    if (q1Value && q2Value) {
        userResponses[currentIndex] = {
            q1: parseInt(q1Value.value),
            q2: -parseInt(q2Value.value) // Inverser la valeur pour la question "négative"
        };
    }
}


function calculateFinalScore() {
    let scores = {
        "Ordre vs Chaos": 0,
        "Esprit vs Corps": 0,
        "Tradition vs Innovation": 0,
        "Social vs Solitaire": 0,
        "Nature vs Technologie": 0,
        "Lumière vs Ténèbres": 0,
        "Survie vs Confort": 0,
        "Individualisme vs Collectivisme": 0,
        "Aventure vs Sécurité": 0
    };

    // Parcourir les réponses de l'utilisateur et additionner les scores pour chaque axe
    questions.forEach((question, index) => {
        if (userResponses[index]) {
            let axe = question.axe;
            scores[axe] += userResponses[index].q1 + userResponses[index].q2;  // Ajouter les réponses aux deux questions
        }
    });

    return scores;
}


function compareByHighSimilarity(finalScores) {
    let subracesCommonPoints = [];

    for (const subrace in subracesProfiles) {
        let commonScore = 0;

        for (const axe in finalScores) {
            const userScore = finalScores[axe];
            const subraceScore = subracesProfiles[subrace][axe];
            const difference = Math.abs(userScore - subraceScore);

            // Si la différence entre les scores est de 2 ou moins
            if (difference <= 2) {
                commonScore += 1;  // Ajouter des points si les scores sont similaires (à 2 près)
            }
        }

        // Ajouter la sous-race avec son score de similarité élevé
        subracesCommonPoints.push({ subrace: subrace, commonScore: commonScore });
    }

    // Trier les sous-races par score de similarité élevé (plus le commonScore est élevé, mieux c'est)
    subracesCommonPoints.sort((a, b) => b.commonScore - a.commonScore);

    return subracesCommonPoints;  // Retourner toutes les sous-races
}



function compareWithSubraces(finalScores) {
    let subracesDifferences = [];

    for (const subrace in subracesProfiles) {
        let totalDifference = 0;
        for (const axe in finalScores) {
            totalDifference += Math.abs(finalScores[axe] - subracesProfiles[subrace][axe]);
        }

        // Ajouter la sous-race et sa différence totale au tableau
        subracesDifferences.push({ subrace: subrace, difference: totalDifference });
    }

    // Trier les sous-races par différence totale (de la plus petite à la plus grande)
    subracesDifferences.sort((a, b) => a.difference - b.difference);

    return subracesDifferences;  // Retourner toutes les sous-races
}
function createRadarChart(finalScores) {
    const ctx = document.getElementById('personalityRadarChart').getContext('2d');

    // Récupérer les axes (les en-têtes du tableau des scores)
    const axes = Object.keys(finalScores);

    // Récupérer les scores pour chaque axe
    const scores = Object.values(finalScores);

    // Créer le diagramme en toile d'araignée avec Chart.js
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: axes,  // Les axes (par exemple : "Ordre vs Chaos", "Esprit vs Corps", etc.)
            datasets: [{
                label: 'Scores de Personnalité',
                data: scores,  // Les scores correspondants
                backgroundColor: 'rgba(52, 152, 219, 0.2)',  // Couleur de fond de la toile
                borderColor: 'rgba(52, 152, 219, 1)',  // Couleur de la ligne
                pointBackgroundColor: 'rgba(52, 152, 219, 1)',  // Couleur des points
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 10  // Assure-toi que l'échelle correspond à tes scores (par exemple, si les scores vont de -10 à 10, ajuste ici)
                }
            },
            responsive: true
        }
    });
}

// Initial setup
updateQuestions();
