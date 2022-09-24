// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
let a_arr = [5, 9, 7, 10, 35, 76, 33, 568, 3452, 34, 2345, 6567, 567, 112];
let a_divisor = 3;


function solution(arr, divisor) {
    var answer = [];  // answer에 빈 배열 생성
    for (let i = 0; i < arr.length; i++) {
        let remains = arr[i] % divisor; // 나머지값을 변수에 담음
        if (!(remains > 0)) {
            answer.push(arr[i]); // 조건에 맞는 값은 answer에 push
        }
    }
    if (answer.length === 0) {
        answer.push(-1); // 빈 객체에는 -1 push
    }
    answer.sort(function (a, b) {
        return a - b; // 오름차순 정렬인데 a-b 에서 0보다 작은 값이 나오면 a를 앞으로 보낸다고 한다.
    })
    return answer;
}



// 다른 사람의 코드

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0); // filter를 이렇게 쓰는 지 처음 알았따.. filter안에 있는 함수의 결과값에 맞는 값들만 모아서 새로운 배열로 반환한다.
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
    //변수 = 조건식 ? 값1 : 값2 << 이런 형식으로 조건식을 판단하여 조건식이 참이면 값1, 조건식이 거짓이면 값2를 변수에 대입한다
}
