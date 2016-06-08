/* palindrome solution written in erl
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.blackguycoding.co*/

-module(`Nazgul_palindrome`).
-export([main/1]).

main([FileName|_Args]) ->
    {ok, File} = file:open(FileName, read),
    forEachLine(File, fun process/1).

forEachLine(File, Callback) ->
    case io:get_line(File, "") of
        eof  -> file:close(File);
        Line -> Callback(Line),
                forEachLine(File, Callback)
    end.

process(Line) ->
    Stripped = re:replace(Line, "\\s+", "", [global,{return,list}]),
    LowerCase = string:to_lower(Stripped),
    case lists:all(fun compare/1,
                   lists:zip(LowerCase,
                             lists:reverse(LowerCase))) of
        true  -> io:format("AY | ~s~n", [sort(Stripped)]);
        false -> io:format("NAY | ~s~n", [sort(Stripped)])
    end.

compare({A, A}) -> true;
compare(_) -> false.

sort(Line) -> lists:sort(fun reversed/2, Line).

reversed(A, B) -> A > B.
