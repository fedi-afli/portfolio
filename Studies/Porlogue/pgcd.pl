[user].

pgcd(A,0,A):-A>0.
pgcd(A,B,C):-B>0,A1 is A mod B ,pgcd(B,A1,C).


[user].
factorielle(0,M,1).
factorielle(N,M,F):-N>0 ,N1 is N-1,factorielle(N1,M,F1),F is N*F1 mod M.

[user].
fact(N,F):- R is sqrt(N),R1 is ceil(R),factorielle(R1,N,F1),pgcd(F1,N,F).
