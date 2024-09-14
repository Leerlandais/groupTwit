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


### Quand vous faites des commits, ajoutez un message clair, expliquant les changements et où ils sont. Par example
```bash
git commit -m "Client: Ajouté component: Button"
ou
git commit -m "Root: Ajouté option pour concurrent start dans le .json script"
```

### Limitez chaque commit à une seule modification. Ne faites pas un commit comme celui-ci :
```bash
git commit -m "Ajouté component: Button. Changement du Port. Crée un nouveau Navbar. Installed socket:io"
```
[Astuces pour des bons commits](https://dev.to/sheraz4194/good-commit-vs-bad-commit-best-practices-for-git-1plc?context=digest)


# Suivez les bonnes pratiques, travaillez toujours sur une autre branche ! N'utilisez pas la branche `main`.
