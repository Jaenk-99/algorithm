def solution(a, b):
    month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    temp = 0
    
    for i in range(a):
        temp += month[i]
        
    answer = day[(temp+b) % 7];
    
    return answer
