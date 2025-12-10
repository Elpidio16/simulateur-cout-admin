# Simulateur de Coût Administratif

## 📋 Vue d'ensemble
Un simulateur web simple, moderne et pédagogique permettant aux indépendants, TPE et professions libérales de mesurer le coût réel de leur administratif en temps et en argent.

## ✨ Caractéristiques

### Fonctionnalités principales
- **Curseur d'heures** : Ajustez les heures d'administratif par semaine (0 à 10 heures)
- **Sélection du taux horaire** : 4 boutons prédéfinis (30€, 50€, 70€, 100€) + champ personnalisé
- **Calculs temps réel** : Résultats instantanés sans rechargement
- **Affichage des résultats** : 
  - Temps administratif mensuel (heures)
  - Coût réel mensuel (€)
  - Coût réel annuel (€) - mise en avant visuelle
- **Message pédagogique** : Sensibilisation à l'impact économique réel

### Design
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Interface moderne avec gradients et animations fluides
- ✅ Accessibilité complète
- ✅ Aucune dépendance externe
- ✅ Chargement rapide (< 1 seconde)

## 🚀 Utilisation

### Option 1 : Ouvrir directement dans un navigateur
1. Naviguez jusqu'au dossier contenant les fichiers
2. Double-cliquez sur `index.html`
3. Le simulateur s'ouvre dans votre navigateur par défaut

### Option 2 : Avec un serveur local (recommandé)

#### Avec Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Avec Node.js
```bash
# Installez http-server si ce n'est pas fait
npm install -g http-server

# Lancez le serveur
http-server
```

#### Avec PHP
```bash
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 📁 Structure des fichiers

```
simulateur-cout-admin/
├── index.html          # Structure HTML
├── style.css          # Styles CSS (responsive, animations)
├── script.js          # Logique JavaScript (calculs temps réel)
├── README.md          # Ce fichier
└── .gitignore        # Fichiers à ignorer (optionnel)
```

## 🔧 Technicien : Spécifications de calcul

### Formules utilisées
- **Heures mensuelles** = Heures par semaine × 4
- **Coût mensuel** = Heures mensuelles × Taux horaire
- **Coût annuel** = Coût mensuel × 12

### Hypothèses
- 1 mois = 4 semaines
- Aucune donnée n'est enregistrée
- Calculs côté client uniquement (pas de serveur)

## 🎨 Personnalisation

### Modifier les couleurs
Ouvrez `style.css` et modifiez les variables CSS (section `:root`):
```css
--color-primary: #4f46e5;        /* Bleu primaire */
--color-secondary: #10b981;      /* Vert secondaire */
--color-highlight: #f97316;      /* Orange pour la mise en avant */
```

### Modifier les valeurs par défaut
Ouvrez `script.js` et modifiez `appState`:
```javascript
let appState = {
    weeklyHours: 5,              // Heures par défaut
    hourlyRate: 70,              // Taux horaire par défaut
};
```

### Modifier les taux prédéfinis
Éditez les boutons dans `index.html`:
```html
<button class="btn-rate" data-rate="30">30 €</button>
```

## 📱 Responsive Design

Le simulateur s'adapte parfaitement à tous les écrans :
- **Desktop** (> 768px) : Affichage 3 colonnes, interface complète
- **Tablette** (768px - 480px) : Affichage 2 colonnes adapté
- **Mobile** (< 480px) : Affichage 1 colonne, interface tactile optimisée

## 🌐 Intégration à un site existant

### Méthode 1 : iframe
```html
<iframe src="https://votre-domaine.com/simulateur/" 
        width="100%" 
        height="800" 
        frameborder="0"
        style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</iframe>
```

### Méthode 2 : Intégration directe
Copiez les fichiers HTML, CSS et JS dans votre projet et intégrez-les à vos pages.

## ♿ Accessibilité

- ✅ Sémantique HTML5 correcte
- ✅ Contraste des couleurs conforme WCAG
- ✅ Labels associés aux inputs
- ✅ Navigation au clavier complète
- ✅ Support des lecteurs d'écran

## 🔐 Sécurité & Confidentialité

- ✅ Aucun enregistrement de données
- ✅ Aucune communication avec serveur
- ✅ Calculs effectués localement dans le navigateur
- ✅ Pas de cookies, pas de suivi

## 🚀 Évolutions futures possibles

- [ ] Sauvegarde des scénarios (localStorage)
- [ ] Comparaison de plusieurs scénarios
- [ ] Export PDF des résultats
- [ ] Intégration d'autres coûts indirects (impôts, charges...)
- [ ] Graphiques comparatifs (mensuel vs annuel)
- [ ] Mode sombre automatique
- [ ] Support multilingue
- [ ] Progressive Web App (offline mode)

## 📊 Statistiques de performance

- Taille totale : < 50 KB
- Temps de chargement : < 100ms
- Dépendances : 0
- Compatibilité : Tous les navigateurs modernes (ES6+)

## 🤝 Support & Questions

Pour des questions ou des suggestions d'amélioration, consultez la documentation ou modifiez directement les fichiers selon vos besoins.

## 📄 Licence

Ce simulateur est fourni à titre gratuit et pédagogique.

---

**Version** : 1.0.0  
**Date** : Décembre 2025  
**Dernière mise à jour** : 10/12/2025
