const apiKey = "v1_Xs3yG7hJkL2nM9pR4tVwZqBxDcFaEbHg";
const factElement = document.getElementById("fact");
const btn = document.getElementById("generate-btn");
const url = "api.api-ninjas.com";

const options = {
    method: "GET",
    headers: { "x-api-key": apiKey },
};

const generateFact = () => {
    factElement.innerText = "Récupération d'une nouvelle anecdote...";

    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! statut: ${response.status}. Vérifiez votre clé API.`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0 && data[0].fact) {
                factElement.innerText = data[0].fact;
            } else {
                throw new Error("L'API a renvoyé une anecdote vide ou invalide.");
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération de l'anecdote:", error);
            factElement.innerText = "Erreur: Impossible de charger l'anecdote. " + error.message;
        });
};

btn.addEventListener("click", generateFact);
window.addEventListener("load", generateFact);
