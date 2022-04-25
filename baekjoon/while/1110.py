N = int(input())
a = N // 10
b = N % 10
sumN = -1
count = 0

while N != sumN:
    sumN = a+b
    a = b
    b = sumN % 10
    sumN = a * 10 + b
    count += 1

print(count)
