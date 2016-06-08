/* haskel solution
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.blackguycoding.co*/

import System.Environment

main :: IO ()
main = do
    [ds1, ds2, ds] <- getArgs
    let d1 = read ds1 :: Integer
    let d2 = read ds2 :: Integer
    let d  = read ds  :: Integer
    loop 1 d d1 d2

loop :: Integer -> Integer -> Integer -> Integer -> IO ()
loop c m d1 d2 | c > m     = return ()
               | otherwise = do
    let str = (if c `mod` d1 == 0 then "Fizz" else "") ++
              (if c `mod` d2 == 0 then "Buzz" else "")
    case str of
        "" -> print c
        _  -> putStrLn str
    loop (c+1) m d1 d2
