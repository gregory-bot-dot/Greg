# Qualité automatisée de ChartVision

## Utilité des outils incorporés

- **Vitest** exécute des tests rapides sur la structure du fichier et, ensuite, sur les fonctions purement JavaScript des indicateurs et du backtest.
- **Playwright** ouvre l’application dans Chromium et vérifie réellement les contrôles, le graphique, les symboles et les change­ments de timeframe.
- **axe-core** analyse automatiquement l'accessibilité : noms des contrôles, contraste, navigation clavier, balisage et structure des rôles.
- **Zod** sera utilisé pour valider les bougies reçues de l’API avant leur conversion en données du graphique. Cette validation empêche les valeurs `NaN`, négatives ou incomplètes d’entraîner des calculs faux.

Ces outils sont gratuits, open source et ne remplacent pas l'analyse financière ni ne garantissent la rentabilité d'une stratégie.

## Exécution locale

```bash
npm ci
npm test
npx playwright install --with-deps chromium
npm run test:e2e
```

Le workflow GitHub Actions `.github/workflows/quality.yml` reproduit automatiquement ces contrôles après chaque push et pull request.
