# Exercise: Summation of Multiples
# Objective: Write a function that accepts an integer, n, and returns the sum of all natural numbers below n that are multiples of 3 or 5. If n is negative, return 0. Numbers that are multiples of both 3 and 5 should only be counted once.

# Example: For n = 10, the function should return 23, because 3, 5, 6, and 9 are the multiples of 3 or 5 below 10, and their sum is 23.

def sum_of_mul(n):
    i = 1
    list = []
    if n < 0:
        return 0
    while i < n:
        if i % 3 == 0 or i%5==0:
            list.append(i)
        i += 1
    return sum(list)

print(sum_of_mul(-10))

def sum_multi_3(aNum):
    return sum(n for n in range(1, aNum) if n % 3 == 0 or n % 5 == 0)