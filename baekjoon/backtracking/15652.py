from itertools import combinations_with_replacement

N, M = map(int, input().split())

result = combinations_with_replacement(range(1, N+1), M)
for i in result :
    print(*i) # Unpacking 역할흘 함 (양 옆에 괄호를 제거한다)