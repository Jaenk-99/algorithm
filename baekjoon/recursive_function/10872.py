# 팩토리얼 문제를 풀어봅시다!
# 1. 재귀함수 (68ms)
N = int(input())

def factorial(N):
    if N == 0:
        return 1 
    else:
        return N * factorial(N-1)

print(factorial(N))

###################################################
# 2. 재귀함수 + 삼향 연산자 (72ms)
# 삼향연산자는
#  (참인 경우 값 if 조건 else 거짓인 경우 값) 으로 사용한다
N = int(input())

def factorial(N):
    return (1 if N==0 else N*factorial(N-1))

print(factorial(N))

####################################################
#3. for문으로 (68ms)
N = int(input())

def factorial(N):
    fact = 1
    for i in range(1, N+1):
        fact = fact * i
    return fact

print(factorial(N))