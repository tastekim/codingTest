// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
//
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.


// 런타임 에러 중
function solution(s){
    const answer = {};
    s.toLowerCase().match(/[py]/gi).forEach((o) => answer[o] = (answer[o] || 0) + 1);
    return answer["p"] === answer["y"] ? true : false;
}

// 고차함수를 사용해서 코드가 짧다고 해서 효율성까지 좋은 것은 아닌가보다.
// 밑의 코드가 실행시간 부분에서 1/3 넘게 단축됬다.


// 다시 풀고 돌려서 런타임 해결
function solution(s){
    const py = s.toLowerCase()
    let p = 0;
    let y = 0;
    for (let i = 0; i < py.length; i++) {
        if (py[i] == "p") {
            p++
        } else if (py[i] == "y") {
            y++
        }
    }
    return p == y ? true : false;
};

