[user].
fib(0,0,0).
fib(N,F1,F):-N1 is N-1,fib(N1,F2,F1),F is F1+F2.








