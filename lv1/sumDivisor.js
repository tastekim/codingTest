// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

let a = 24;
let b = 27;
function solution(left, right) {
    let answer = 0; // 누산되는 값
    for (let i = left; i <= right; i++) { // left 부터 right까지 1씩 증가하면서 약수의 갯수를 구한다.
        let count = 0; // 약수 갯수 카운팅
        for (let d = 1; d <= i; d++) { // 1 부터 i = left까지 나눠서 나머지가 0인 경우 카운팅한다.
            if (i % d == 0) count += 1;
        }
        if (!(count % 2)) { // 약수의 갯수가 짝수면 + / 홀수면 -
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}

console.log(solution(a, b))


// 다른사람의 코드
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수면 약수의 갯수가 홀수다,,,, ㄹㅇ수학천재 하나 또 배워갑니다,,,
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}