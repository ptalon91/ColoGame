# ColoGame - Readme
*ColoGame v 0.2*

*Leonardo Cavaliere - David Fluehmann - Patrick Talon - Nicolas Vallotton*  

Projet dans le cadre du cours : Programmation pour Internet II de Isaac Pante
Faculté des Lettres - Université de Lausanne - Mars à Mai 2017
Github : https://github.com/ptalon91/ColoGame/

Description
------------
ColocGame est une application qui rend les tâches ménagères en colocation plus ludiques. Le principe étant de gagner des points en réalisant les tâches quotidiennes. Chaque tâche possède un compte à rebours, moins les joueurs ont des points plus ils risquent de se voir assigner les tâches que personne ne veut faire.  

Le public cible d'une telle application sont des personnes à priori jeunes et vivant en colocation qui doivent se répartir les corvées ménagères. ColoGame se veut ludique car le but est de faire avant ses colocataires les tâches les moins pénibles pour laisser les plus paresseux se voir attribuer les tâches les plus déagréables tout en participant à la vie communautaire du ménage. Grâce à l'application, les colocataires se responsabilisent et cela doit normalement éviter le laxisme de certain, tout réduisant les conflits liés à l'attribution des tâches.

Interface
------------
Ci dessous les différentes étapes d'une utilisation de base de ColoGame :

L'utilisateur arrive sur la page d'accueil et peut se logger ou créer un nouvel utilisateur avec un mot de passe.
S'il n'est pas encore affilié à une colocation (groupe d'utilisateurs), il arrivera sur une page pour rejoindre une “coloc” ou créer une “coloc”.
Sur la page principale, l'utilisateur peut voir le classement de sa “coloc” lié aux nombres de points de tous ses colocataires, ainsi que les notifications des dernières tâches effectuées par lui ou ses colocataires et le nombre de points attribués.
Le bouton “Tâches” permet de d'ouvrir la page où l'utilisateur va pouvoir sélectionner une tâche et confirmer qu'elle a bien été exécutée pour recevoir les points correspondants. Lorsqu'une tâche est notifiée comme "faite" , la tâche n'est plus à faire tant qu'un utilisateur ne décoche pas la case "Cette tâche a été faite".

Base de données
------------
La base de données basée sur MongoDB est construite selon 3 grandes tables :
Une pour les users où l’on retrouve des champs concernant l’affiliation à une “coloc”, le nombre de points de l’utilisateur et son username.
Une table “notifs” qui permet d’afficher les notifications de toutes la coloc ou d’un certain utilisateur. On y retrouve des champs liés à la tâche effectuée, la date , l’utilisateur, sa coloc et un texte pré-conçu qui est directement affiché dans les zones des notifications. À noter que les notifications d’une coloc ne va s’afficher que si l’utilisateur fait bien parti de cette colocation.
Une table concernant les tâches (“tasks”) où l’on peut trouver des champs liés à l’utilisateur ayant créé la tâche, son appartenance à une coloc, la description de la tâche pour les notifications, les points de cette tâche, si la tâche est un service ou un gage (pas encore implémenté dans l’application), si la tâche est en “pending” (donc  a été faite et en attente devoir la refaire) et si l’information si la tâche a été faite pour l’afficher visuellement.


Licence
------------
Ce programme est un logiciel gratuit.

ColoGame a été développé avec le framework de développement web en Javascript *Meteor* dans sa version 1.4.4.  

  Les principaux modules Meteor utilisés dans ce projet sont :
  - mongol/minimongo (gestion des bases de données)
  - blaze (template HTML)
  - iron:router (redirection des pages)
  - accounts (création d'utilisateur avec mot de passe)
  - bootstrap (mise en page css)
  - underscore (collection de helpers)

Certaines libraries et modules utilisés pour le développement sont parfois soumis à un copyright par leurs auteurs respectifs.

Copyright © 2017 - l'équipe de développement de Cologame : Leonardo Cavaliere - David Fluehmann - Patrick Talon - Nicolas Vallotton





---------
