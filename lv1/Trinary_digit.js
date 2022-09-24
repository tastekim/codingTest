//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
    let answer = (n.toString(3)).toString().split("").reverse(); // n을 10진수 -> N진수 : n.toString(N) -> n이 Number 타입이여야 한다.
    return parseInt(answer.map(o => parseInt(o)).toString().replaceAll(",",""), 3); // 3진수 -> 10진수 : answer에 넣은 값은 3진수 이기 때문에 똑같이 n.toString(3) 하면 10진수로 변환해준다.
}

console.log(solution(125))


// 다른사람의 코드
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3); // toString으로 변환하면 str형으로 변환이 되고 destructing(...)을 사용해서 각 글자를 추출해서 변수로 만들어 준후 []로 묶어서
    // array로 만든 다음 join("")으로 요소들을 하나로 묶어주고 parseInt(Number, 3)으로 10진수로 다시 return한다...
}

// 진짜 미친사람인가,,,,ㅜ


