[user].
fact(A,B):-fact(A,1,B).
fact(1,ACC,ACC).
fact(A,ACC,F):-ACC1 is ACC*A,A1 is A-1,fact(A1,ACC1,F).
