// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.


let a = "try hello world"

function solution(s) {
    let word = '';
    let answer = [];
    s = a.split(' '); // 문장을 빈칸 단위로 배열화 ['try', 'hello', 'world']
    for (let i = 0; i < s.length; i++) {
        let v = Array.from(s[i]); // i번째의 str을 배열화 ['t', 'r', 'y']를 v에 넣는다.
        for (let u = 0; u < v.length; u++) {
            word += u % 2 ? v[u].toLowerCase() : v[u].toUpperCase() // index값을 2로 나눠서 짝수면 대문자, 홀수면 소문자로 하나씩 word에 추가
        }
        answer.push(word);
        v = []; // v랑 word를 다시 비워주지 않으니까 undefined랑 이미 변환된 단어가 또 들어가는 현상이 생겼다.
        word = []; //
    }

    return answer.toString().replaceAll(',', ' '); // toString으로 리스트를 str으로 변환 단어 사이에 있는 콤마를 공백으로 대체
}

console.log(solution(a))