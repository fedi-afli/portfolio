[user].

diviser([], [], []).
diviser([X], [X], []).
diviser([X,Y|L],[X|R1],[Y|R2]):-diviser(L,R1,R2).




len([],0).
len([_|L],N):-len(L,N1),N is N1+1.



fusion([],[],[]).
fusion([], L, L).
fusion(L, [], L).
fusion([X|L1],[Y|L2],[X|R]):-X<Y,fusion(L1,[Y|L2],R).
fusion([X|L1],[Y|L2],[Y|R]):-X>=Y,fusion([X|L1],L2,R).
tri([X],[X]).

tri([],[]).

tri(L,R):-diviser(L,R1,R2),tri(R1,R11),tri(R2,R22),fusion(R11,R22,R).


