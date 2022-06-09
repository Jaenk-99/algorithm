def solution(arr, divisor):
    answer = []
    for i in range(len(arr)):
        if arr[i]%divisor == 0:
            answer.append(arr[i])
    answer.sort()
    return answer if len(answer) else [-1]