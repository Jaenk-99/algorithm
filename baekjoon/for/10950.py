# 2739번 문제(브3)
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

a = int(input())

arr = []
for i in range(a):
    n, m = map(int, input().split())
    arr.append(n+m)

for i in range(a):
    print(arr[i])
