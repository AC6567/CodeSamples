/* palindrome solution written in python
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.blackguycoding.co*/
import sys

def isPalindrome(line):
    for i in range(len(line)//2):
        if line[i].lower() != line[-i-1].lower():
            return False
    return True

def sort(line):
    return ''.join(sorted([c for c in line], reverse=True))

if __name__ == "__main__":
    with open(sys.argv[1], "r") as file:
        for line in file:
            line = ''.join(line.strip().split())
            if isPalindrome(line):
                print("AY |", sort(line))
            else:
                print("NAY |", sort(line))
