// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

let a = "Zbcdefg";


function solution(s) {
    let up = []; // 대문자 받을 배열
    let low = []; // 소문자 받을 배열
    s.split("").filter(o => o === o.toUpperCase() ? up.push(o) : low.push(o)); // s를 리스트로 만들어서 각 단어가 대문자인지 소문지인지 구별 후 나눠서 저장
    const [x, y] = [low, up];
    [x, y].forEach(o => {
        o.sort((a, b) => {         //1을 반환하면 b가 앞으로 -1을 반환하면 a가 앞으로 둘이 같은 경우 0을 반환해서 sort
            if (a < b) return 1;
            if (a > b) return -1;
            if (a === b) return 0;
        })
    });
    return (x + y).replaceAll(",","") // 합친 후 나오는 "," 제거
}


// 다른사람의 코드
function solution(s) {
    return s
        .split("") // s를 배열로 반환 후
        .sort() // 정렬 후
        .reverse() // 뒤집은 후
        .join(""); // 합침
}
// 진짜 세게 현타 온다. 인생 너무 고민하지 말자. 생각보다 단순한 문제일수도 있다;; 쨔ㅏ증나

console.log(solution(a))

