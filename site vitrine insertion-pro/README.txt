===========================================
PROJET JAVA : GESTION DE STAGIAIRES
===========================================

1. DESCRIPTION DU PROJET
-------------------------------------------
Ce projet consiste à modéliser une gestion de stagiaires
et de formations en Java en utilisant la programmation
orientée objet (POO) ainsi que les Streams.

Le projet comporte deux classes principales :
- Stagiaire
- Formation

-------------------------------------------

2. CLASSE STAGIAIRE
-------------------------------------------
La classe Stagiaire représente un stagiaire avec :

Attributs :
- nom : nom du stagiaire (String)
- notes : tableau de notes (float[])

Fonctionnalités :
- calculerMoyenne() : calcule la moyenne des notes
- trouverMax() : retourne la note maximale
- trouverMin() : retourne la note minimale
- getters et setters pour accéder/modifier les données

-------------------------------------------

3. CLASSE FORMATION
-------------------------------------------
La classe Formation représente une formation contenant plusieurs stagiaires.

Attributs :
- intitule : nom de la formation
- nbrJours : durée de la formation
- stagiaires : tableau de Stagiaire

Fonctionnalités :
- calculerMoyenneFormation() :
  calcule la moyenne des moyennes des stagiaires

- trouverIndiceMax() :
  retourne l’indice du stagiaire ayant la meilleure moyenne

- trouverNomMax() :
  retourne le nom du meilleur stagiaire

- trouverMinMax() :
  retourne la note minimale du meilleur stagiaire

-------------------------------------------

4. UTILISATION DES STREAMS
-------------------------------------------
Le projet utilise les Streams Java pour :

- parcourir les tableaux sans utiliser de boucle for
- calculer des moyennes avec .average()
- trouver des valeurs max/min avec .max() et .min()
- comparer des objets avec Comparator

-------------------------------------------

5. EXEMPLE D’UTILISATION
-------------------------------------------
Création de stagiaires :

Stagiaire s1 = new Stagiaire("Awa", new float[]{12, 15, 14});
Stagiaire s2 = new Stagiaire("Moussa", new float[]{16, 18, 17});

Création d’une formation :

Formation f = new Formation("Java", 30, new Stagiaire[]{s1, s2});

Appels des méthodes :

f.calculerMoyenneFormation();
f.trouverIndiceMax();
f.trouverNomMax();
f.trouverMinMax();

-------------------------------------------

6. OBJECTIFS PEDAGOGIQUES
-------------------------------------------
- Comprendre les classes et objets en Java
- Utiliser les tableaux d’objets
- Manipuler les méthodes (getters/setters)
- Utiliser les Streams pour simplifier le code
- Travailler avec des comparateurs

-------------------------------------------

7. AUTEUR
-------------------------------------------
Nom : [Ton nom ici]
Projet : Gestion des stagiaires et formations
Langage : Java
-------------------------------------------