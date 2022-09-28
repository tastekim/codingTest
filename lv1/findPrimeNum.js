// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
//
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

let n = 9;

// 문제는 풀리는데 런타임이 너무 길다,,, 리팩토링 시급...
function solution(n) {
    let answer = 0;
    if (n == 2 || n == 3) return n - 1;
    for (let i = 4; i <= n; i++) {
        if (Math.sqrt(i) % 2 !== 0) {
            if (i % 2 !== 0) {
                for (let d = 3; d <= i; d++) {
                    if(i % d === 0 && d !== i) {
                        break ;
                    } else if (i % d === 0 && d === i) {
                        answer += 1;
                    }
                }
            }
        }
    }

    return answer + 2;
}

console.log(solution(n))
