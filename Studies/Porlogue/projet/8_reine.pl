[user].

print([C|R]):-printer(1,C,5),print(R).
print([]).

printer(C,P,Fl):- C \= P,C < Fl,write(' . '),C1 is C+1,printer(C1,P,Fl).
printer(C,P,Fl):- C =:= P,write('X'),C1 is C+1,printer(C1,P,Fl).
printer(C,_,Fl):- C =:= Fl,writeln('').
