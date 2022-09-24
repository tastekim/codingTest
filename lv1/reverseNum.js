// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
    let answer = [];
    let v = (n+"").split("") // 문자형으로 변환 후 리스트로 형 변환
    for (let i = 0; i < (n+"").split("").length; i++) {
        answer.push(parseInt(v.pop())); // pop으로 마지막 요소부터 하나씩 push
    }
    return answer;
}

// 다른사람의 코드
function solution(n) {
    return (n+"").split("").reverse().map(o => parseInt(o)); // reverse()는 배열의 요소 순서들을 반전해준다.
}
