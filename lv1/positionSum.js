// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
    let answer = 0;
    for (let i of Array.from(n.toString())) {
        answer += parseInt(i);
    }
    return answer;
}

let a = 12345
console.log((a+"").split(""))

// 다른사람의 코드
function solution(n){
    // n은 숫자형이지만 str인 빈값을 더해서 형변환을 해준다. String()과 같은 역할인 셈. 빈값으로 쪼개서 array로 변환 후 reduce()로 계산한다.
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    // reduce((acc, curr) => acc + parseInt(curr), 0) 첫 매개변수로 오는 함수는 콜백함수로 반환값이 배열 전체를 반복하는동안 누적된다. 두번째 매개변수는 배열에서 reduce함수를 시작할 인덱스 번호다.
}