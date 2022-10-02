//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
let a = 5;
let b = 3;

function solution(a, b) {
    const n = [a,b].sort((x, y) => x - y)
    let answer = 0;
    for (;n[0] <= n[1]; n[0]++) {
        answer += n[0]
    };
    return answer
}

console.log(solution(a, b))

// 다른사람의 코드
fu드ction adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2; //등차수열 , 가우스 계산법을 이용한 로직이다.
}

// 심플하고 참신한 방법인 것에 비해 런타임 에러로 탈락한 문제.
