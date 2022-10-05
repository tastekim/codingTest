// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

let s = "qwer"
function solution(s) {
    let div = parseInt(s.length / 2);
    return s.length % 2 ? s[div] : s.slice(div - 1, div + 1)
}
console.log(solution(s))
