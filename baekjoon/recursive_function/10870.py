#피보나치 수를 풀어봅시다!
#피보나치 수 란?
#Fn = Fn-1 + Fn-2

#1. 재귀함수 (72ms)
n = int(input())

def fibonacci(n):
    if n <= 1 :
        return n;
    else:
        return (fibonacci(n-1)+fibonacci(n-2))

print(fibonacci(n))

#####################################################
# 2. 재귀함수 + 삼향연산자 (68ms)
n = int(input())

def fibonacci(n):
    return(n if n<=1 else (fibonacci(n-1)+fibonacci(n-2))
)

print(fibonacci(n))

#####################################################
# 3. for문 (64ms)
n = int(input())

def fibonacci(n):
    before_result = 0
    result = 0
    temp = 0

    for i in range(n+1):

        if i > 1:
            temp = result
            result = result + before_result
            before_result = temp

        elif i == 1:
            result = 1

    return result

print(fibonacci(n))
