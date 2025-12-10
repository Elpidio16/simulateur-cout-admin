/* ========================================
   SIMULATEUR DE COÛT ADMINISTRATIF
   LOGIQUE JAVASCRIPT
   ======================================== */

// Éléments du DOM
const hoursSlider = document.getElementById('hoursSlider');
const hoursValue = document.getElementById('hoursValue');
const btnRates = document.querySelectorAll('.btn-rate');
const customRateInput = document.getElementById('customRate');
const monthlyHoursDisplay = document.getElementById('monthlyHours');
const monthlyCostDisplay = document.getElementById('monthlyCost');
const yearlyCostDisplay = document.getElementById('yearlyCost');

// État de l'application
let appState = {
    weeklyHours: 5,
    hourlyRate: 70, // Valeur par défaut
};

/**
 * Formate un nombre avec séparateur de milliers
 * @param {number} num - Nombre à formater
 * @returns {string} - Nombre formaté
 */
function formatNumber(num) {
    return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/**
 * Calcule les résultats basés sur les heures et le taux horaire
 */
function calculateResults() {
    const weeklyHours = appState.weeklyHours;
    const hourlyRate = appState.hourlyRate;

    // Hypothèse : 1 mois = 4 semaines
    const monthlyHours = weeklyHours * 4;
    const monthlyCost = monthlyHours * hourlyRate;
    const yearlyCost = monthlyCost * 12;

    // Mise à jour de l'affichage
    monthlyHoursDisplay.textContent = formatNumber(monthlyHours);
    monthlyCostDisplay.textContent = formatNumber(monthlyCost);
    yearlyCostDisplay.textContent = formatNumber(yearlyCost);

    // Animation de mise à jour
    animateResultCard(monthlyCostDisplay.closest('.result-card'));
    animateResultCard(yearlyCostDisplay.closest('.result-card'));
}

/**
 * Ajoute une animation lors de la mise à jour des résultats
 * @param {Element} card - Élément carte à animer
 */
function animateResultCard(card) {
    if (!card) return;

    card.style.animation = 'none';
    // Trigger reflow pour relancer l'animation
    void card.offsetWidth;
    card.style.animation = 'pulse 0.5s ease';
}

/**
 * Ajoute les styles d'animation pulse au document
 */
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; transform: scale(1.02); }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Gère le changement du curseur d'heures
 */
hoursSlider.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    appState.weeklyHours = value;
    hoursValue.textContent = value;
    calculateResults();
});

/**
 * Gère les clics sur les boutons de taux prédéfinis
 */
btnRates.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Retire la classe active de tous les boutons
        btnRates.forEach((b) => b.classList.remove('active'));

        // Ajoute la classe active au bouton cliqué
        btn.classList.add('active');

        // Met à jour le taux et efface le champ personnalisé
        const rate = parseFloat(btn.dataset.rate);
        appState.hourlyRate = rate;
        customRateInput.value = '';
        calculateResults();
    });
});

/**
 * Gère la saisie du taux personnalisé
 */
customRateInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();

    if (value === '') {
        // Si le champ est vide, revenir au dernier bouton actif
        const activeBtn = document.querySelector('.btn-rate.active');
        if (activeBtn) {
            appState.hourlyRate = parseFloat(activeBtn.dataset.rate);
        }
    } else {
        const rate = parseFloat(value);
        if (!isNaN(rate) && rate >= 0) {
            // Retire la classe active de tous les boutons
            btnRates.forEach((btn) => btn.classList.remove('active'));

            appState.hourlyRate = rate;
            calculateResults();
        }
    }
});

/**
 * Gère le changement du taux personnalisé
 */
customRateInput.addEventListener('change', (e) => {
    const value = e.target.value.trim();

    if (value !== '') {
        const rate = parseFloat(value);
        if (!isNaN(rate) && rate >= 0) {
            appState.hourlyRate = rate;
            calculateResults();
        }
    }
});

/**
 * Initialise l'application
 */
function init() {
    addAnimationStyles();
    calculateResults();
    console.log('Simulateur de coût administratif initialisé');
}

// Lancement de l'initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', init);

// Alternative si le DOM est déjà prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
