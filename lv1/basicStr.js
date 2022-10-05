// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

let a = "19b2"
function solution(s) {
    if (s.length != 4 && s.length != 6) return false;
    return s.match(/[a-z]/gi) === null ? true : false;
}

// 다른사람의 코드
function aaa(s){
    var regex = /^\d{6}$|^\d{4}$/; // 정규식 자체로도 끝낼수가 있었네^^,,,,
    return regex.test(s);
}

console.log(aaa(a))