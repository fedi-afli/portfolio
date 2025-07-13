[user].

:- use_module(library(clpfd)).

% Définition des couleurs disponibles (1 à 4)
color(1). color(2). color(3). color(4).

% Définition des relations d'adjacence
adjacent(a, b). adjacent(a, c). adjacent(a, d).
adjacent(b, c). adjacent(b, e).
adjacent(c, d). adjacent(c, e).
adjacent(d, e).

% Contrainte pour que deux régions adjacentes aient des couleurs différentes
different(X, Y) :- X #\= Y.

% Algorithme principal pour le coloriage de la carte
map_coloring([A, B, C, D, E]) :-
    Colors = [A, B, C, D, E], % Liste des couleurs pour chaque région
    Colors ins 1..4, % Chaque couleur doit être entre 1 et 4
    A #\= B, A #\= C, A #\= D,
    B #\= C, B #\= E,
    C #\= D, C #\= E,
    D #\= E,
    labeling([ff], Colors). % Applique la recherche avec "first-fail"

% Prédicat pour afficher la solution
solve :-
    map_coloring([A, B, C, D, E]),
    write('Solution trouvée :'), nl,
    write('A = '), write(A), nl,
    write('B = '), write(B), nl,
    write('C = '), write(C), nl,
    write('D = '), write(D), nl,
    write('E = '), write(E), nl.




:- use_module(library(lists)).
:- use_module(library(csv)).
:- use_module(library(pce)).

% Lire le graphe à partir d'un fichier CSV
lire_graphe(Fichier, Graphe) :-
    csv_read_file(Fichier, Donnees, [functor(region), arity(2)]),
    maplist(ligne_en_graphe, Donnees, Graphe).

ligne_en_graphe(region(R, VoisinsStr), R-Voisins) :-
    atomic_list_concat(VoisinsList, ',', VoisinsStr),
    maplist(atom_string, Voisins, VoisinsList).

% Liste des couleurs possibles
couleurs([rouge, vert, bleu, jaune]).

% Vérifier si une coloration est valide
valide(_, []).
valide(Coloration, [R-Voisins|Restes]) :-
    member(R-C, Coloration),
    \+ (member(V, Voisins), member(V-C, Coloration)),
    valide(Coloration, Restes).

% Colorier les régions
colorier([], _, []).
colorier([Region-Voisins|Restes], Couleurs, [Region-C|Coloration]) :-
    member(C, Couleurs),
    colorier(Restes, Couleurs, Coloration),
    valide([Region-C|Coloration], [Region-Voisins|Restes]).

% Trouver une solution
trouver_coloration(Fichier, Coloration) :-
    lire_graphe(Fichier, G),
    couleurs(Couleurs),
    colorier(G, Couleurs, Coloration),
    afficher_coloration(Coloration).

% Affichage des régions colorées avec XPCE
afficher_coloration(Coloration) :-
    new(D, picture('Coloriage de Carte')),
    send(D, open),
    draw_regions(D, Coloration, 100, 100, 50).

draw_regions(_, [], _, _, _).
draw_regions(D, [Region-Couleur|Rest], X, Y, Size) :-
    send(D, display, new(C, circle(Size)), point(X, Y)),
    send(C, fill_pattern, colour(Couleur)),
    send(D, display, new(T, text(Region)), point(X-10, Y+Size/2+10)),
    X1 is X + Size + 20,
    draw_regions(D, Rest, X1, Y, Size).

% Exécuter le programme avec un fichier d'entrée
:- trouver_coloration('carte.csv', Coloration).
