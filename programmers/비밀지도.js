function solution(n, arr1, arr2) {
    let map = [[], [], []]
    for (let i = 0; i < n; i++) {
        map[0].push(arr1[i].toString(2))
        map[1].push(arr2[i].toString(2))
        map[2].push(String(Number(map[0][i]) + Number(map[1][i])).padStart(n, "0"))
        for (let j = 0; j < map[2][i].length; j++) map[2][i] = map[2][i].replace("0", " ").replace("1", "#").replace("2", "#")
    }
    return map[2]
}

// function solution(n, arr1, arr2) {
//     let map = []
//     for (let i = 0; i < n; i++) {
//         map.push(String(Number(arr1[i].toString(2)) + Number(arr2[i].toString(2))).padStart(n, "0"))
//         for (let j = 0; j < map[i].length; j++) map[i] = map[i].replace("0", " ").replace("1", "#").replace("2", "#")
//     }
//     return map
// }
