// Affiche les valeurs sur l'écran de la calculatrice
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Efface l'écran de la calculatrice
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Supprime le dernier caractère à l'écran
function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// Effectue le calcul
function calculateResult() {
    let currentDisplay = document.getElementById('display').value;
    try {
        let result = eval(currentDisplay);  // Utilisation de eval pour calculer l'expression
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
    }
}
