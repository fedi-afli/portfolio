
si[user].
somme([],0).
somme([H|T],S):-somme(T,S1),S is S1+H.


seq(N,[N|L1]):-N>0,N1 is N-1,seq(N1,L1).


seq1(N,[N],N).
seq1(F,L,N):-F=<N,F1 is F+1,seq1(F1,L1,N), L=[F|L1].


myconcat([],L,L).
myconcat([H1|L1],L2,[H1|F]):-myconcat(L1,L2,F).


inverse([],[]).
inverse([H|L],R):-inverse(L,L1),myconcat(L1,[H],R).



inv(L,I):-inv(L,[],I).
inv([],ACC,ACC).
inv([H|T],ACC,I):-inv(T,[H|ACC],I).


plusgrand([],[],_N).
plusgrand([H|T],[H|R],N):-H>=N,plusgrand(T,R,N).
plusgrand([H|T],R,N):-H<N,plusgrand(T,R,N).



plusgrandpetit([],[],[],_N).
plusgrandpetit([H|T],[H|G],P,N):-H>=N,plusgrandpetit(T,G,P,N).
plusgrandpetit([H|T],G,[H|P],N):-H<N,plusgrandpetit(T,G,P,N).



quicksort([],[]).
quicksort([H|T],R):-plusgrandpetit(T,G,P,H),quicksort(G,G1),quicksort(P,P1),myconcat(P1,[H|G1],R).



