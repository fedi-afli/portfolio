[user].
fact(N,R):-fact(N,1,R).
fact(1,ACC,ACC).
fact(N,ACC,R):-N>1,N1 is N-1,ACC1 is ACC*N,fact(N1,ACC1,R).

fib(0,0,0).
fib(1,0,1).
fib(N,F1,F):-N1 is N-1,fib(N1,F2,F1),F is F1+F2.



pgcd(A,0,A).
pgcd(A,B,G):-B>0,R is A mod B,pgcd(B,R,G).



somme([],0).
somme([H|L],N):-somme(L,N1),N is H+N1.


seq(0,[0]).
seq(N,[N|L]):- N1 is N-1,seq(N1,L).


concatt([],L,L).
concatt([H|L1],L2,[H|R]):-concatt(L1,L2,R).


inverse([X],[X]).
inverse([X|L],H):-inverse(L,H1),concatt(H1,[X],H).

inv([],ACC,ACC).
inv([H|L],ACC,F):-inv(L,[H|ACC],F).

plusgp([],[],[],_N).
plusgp([H|L],[H|G],P,N):-H>=N,plusgp(L,G,P,N).
plusgp([H|L],G,[H|P],N):-H<N,plusgp(L,G,P,N).

quicksort([],[]).
quicksort([N|L],R):-plusgp(L,G,P,N),quicksort(G,G1),quicksort(P,P1),concatt(P1,[N|G1],R).
