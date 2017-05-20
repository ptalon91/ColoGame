# ColoGame - Readme
*Leonardo Cavaliere - David Fluehmann - Rodolfo Miranda - Patrick Talon - Nicolas Vallotton*  

Projet de Programmation pour Internet II  
Faculté des Lettres - Université de Lausanne  
Semestre de Printemps 2017

*ColoGame v 0.1*

Introduction
------------
ColocGame est une application qui rend les tâches ménagères en colocation plus ludiques. Le principe étant de gagner des points en réalisant les tâches quotidiennes. Chaque tâche possède un compte à rebours, moins les joueurs ont de points plus ils risquent de se voir assigner les tâches que personne ne veut faire.  

Le public cible d'une telle application sont des personnes à priori jeunes et vivant en colocation qui doivent se répartir les corvées ménagères. ColoGame se veut ludique car le but est de faire avant ses colocataires les tâches les moins pénibles pour laisser les plus paresseux se voir attribuer les tâches les plus déagréables tout en participant à la vie communautaire du ménage. Grâce à l'application, les colocataires se responsabilisent et cela doit normalement éviter le laxisme de certain, tout réduisant les conflits liés à l'attribution des tâches.

Technologies
------------
  ColoGame a été développé avec le framework de développement web en Javascript *Meteor* dans sa version 1.4.4.  

  Les principaux modules Meteor utilisés dans ce projet sont :
  - mongol/minimongo (gestion des bases de données)
  - blaze (template HTML)
  - iron:router (redirection des pages)
  - accounts (création d'utilisateur avec mot de passe)
  - bootstrap (mise en page css)
  - underscore (collection de helpers)
  - flyandi (compte à rebours)

Méthodologie
----------
  **Ci dessous les différentes étapes d'une utilisation de base de CocoGame**

1. L'utilisateur arrive sur la page d'accueil et peut se loguer ou créer un nouvel utilisateur avec un mot de passe.
2. S'il n'est pas encore affilié à une colocation (groupe d'utilisateurs), il arrivera sur une page pour rejoindre une 'coloc' ou créer une 'coloc'.
3. Sur la page principale, l'utilisateur peut voir le classement de sa 'coloc' lié aux nombres de points de tous ses colocataires, ainsi que les notifications des dernières tâches effectuées par lui ou ses colocataires et le nombre de points attribués.
4. Le boutton 'Tasks' permet de d'ouvrir la page où l'utilisateur va pouvoir sélectionner une tâche et confirmer qu'elle a bien été exécutée pour recevoir les points correspondants.
5. Il est possible de créer des tâches et de leur assigner un temps limite à leur exécution, les utilisateurs avec le moins de points vont se voir attribuer les tâches qu'aucun autre colocataire n'a voulu accomplir.

Discussion
------------------------
*Meteor* est un framework de développement web très puissant. Il permet de développement avec mise à jour visualisation en temps réel. L'implémentation de modules ou 'packages', ainsi que leur documentation disponible sur le web, offre de nombreuses possibilités et diminue le temps de développement d'une application comme *ColoGame*. Cependant, le code est peut être moins intuitif et nécessite un temps d'adaptation préalable relativement conséquent, surtout si plusieurs modules s'imbriquent entre eux.

*Github* a été utilisé pour la gestion du développement de l'application, cet outil permet de sauvegarder les différentes phases du projet et de développer en parallèle certains segments du projet en plusieurs 'branches' pour ensuite fusionner ces dernières sur une 'branche' principale. Ce gestionnaire de développement est certes très pratique avoir un backup de du projet, mais nécessite aussi une bonne connaissance des possibilités et commandes existantes lors d'une utilisation plus poussée.

Améliorations
------------------------



Conclusion
----------
  ce qui a été accompli
