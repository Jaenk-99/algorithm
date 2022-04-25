# 11022번 문제(브3)
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
# 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

a = int(input())

xarr = [0]
yarr = [0]

for i in range(a):
    x, y = map(int, input().split())
    xarr.append(x)
    yarr.append(y)

for j in range(1, a+1):
    print("Case #{}: {} + {} = {}".format(j,
          xarr[j], yarr[j], xarr[j]+yarr[j]))
