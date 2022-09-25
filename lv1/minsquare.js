// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

let a = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
    let max = 0;
    let min = 0;
    let answer = sizes.forEach(o => { // forEach() -> 배열의 첫번째 요소부터 매개변수로 들어가서 함수 실행.
        const [a, b] = o.sort((a, b) => a - b) // a-b -> 오름차순
        if (a > max) max = a;
        if (b > min) min = b;
    })
    return max * min
}

console.log(solution(a))