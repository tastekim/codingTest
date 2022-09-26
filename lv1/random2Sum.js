// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

let a = [2, 1, 3, 4, 1];

function solution(numbers) {
    let temp = [];
    while (numbers.length != 0) {
        for (let i = 0; i < numbers.length - 1; i++) { // length는 전체길이지만 더하기는 i+1 부터 시작하기 때문에 length에서 -1 을 해줘야 NaN 값을 뱉지 않는다.
            temp.push(numbers[0] + numbers[i+1]);
        }
        numbers.shift(); // 배열의 첫 번째 요소 제거
    }
    const set = new Set(temp); // [...new Set(temp)] 로 쓸 수 있음. 중복되는 값 제거.
    return Array.from(set).sort((a, b) => a - b); // 오름차순 정렬
}

console.log(solution(a))