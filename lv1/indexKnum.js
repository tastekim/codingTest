//배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
//
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
//
// 1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 3. 2에서 나온 배열의 3번째 숫자는 5입니다.

// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    let answer = [];
    let arr;
    for (let i = 0; i < commands.length; i++) {
        arr = array.slice(commands[i][0]-1,commands[i][1]); // array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
        arr.sort((a, b) => a - b); // 위에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
        answer.push(arr[commands[i][2]-1]);// 위에서 나온 배열의 3번째 숫자는 5입니다.
    }
    return answer;
}

console.log(solution(array, commands))

// 다른사람의 코드
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command // commands의 첫번째요소인 [2, 5, 3] 이 각각 왼쪽의 const 배열에 들어가서 키값을 얻는다.
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1) // filter의 두번째 매개변수인 인덱스 값으로 2 - 5번째 요소만 반환
            .sort((a,b) => a - b) // 정렬

        return newArray[position - 1] // 위에 첫 return에서 commands.map()으로 불렀기 때문에 모든 콜백함수가 돌고 나서 나온 return값들을 새로운 배열로 만들어서 반환하기 때문에 따로 배열에 안 담은듯함.
    })
}