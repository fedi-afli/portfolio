[user].
fact1(A,F):- B is A+1,fact1(1,1,F,B).
fact1(A,ACC,ACC,A).
fact1(A,ACC,F,B):-A1 is A+1,ACC1 is ACC*A mod 988990999999,fact1(A1,ACC1,F,B).
