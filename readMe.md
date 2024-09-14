# Lisez le fichier readMe.md dans tous les dossiers !!!
## Ne changez rien dans ce dossier

### Le script d'auto-installation gère la mise à jour lors de la première installation, mais ensuite, utilisez la commande suivante avant de commencer :

```bash
npm run filefix
```

### Tout le Front est dans le dossier Client et peut être lancé avec :
```bash
npm run client
```
### Tout le Back est dans le dossier Server et peut être lancé avec :
```bash
npm run server
```

### Il n'est pas nécessaire d'exécuter npm audit fix ! L'installation initiale inclut toutes les bibliothèques (même celles vulnérables), donc il y aura toujours des avertissements pendant le développement. <br> Quand le projet est mis en mode Prod, uniquement les bibliothèques nécessaires sont incluses. C'est à ce moment-là qu'on corrige les vulnérabilités.