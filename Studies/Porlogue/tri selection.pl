[user].


mini([X], X, []).
mini([X|L],X,[M|F]) :- mini(L,M,F),X=<M.
mini([X|L],M,[X|F]) :-mini(L,M,F), X>M.



myconcat([],L,L).
myconcat([H1|L1],L2,[H1|F]):-myconcat(L1,L2,F).



trisel([],[]).
trisel(L,[M|F]):-mini(L,M,LF),trisel(LF,F).


triee([_]).
triee([X,Y|L]):-X=<Y,triee([Y|L]).

%tribull([],[]).
%tribull([X,Y|L],F):-x>y,myconcat(F,[y|x],F).

