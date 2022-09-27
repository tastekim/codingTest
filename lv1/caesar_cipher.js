// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
// "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

//"e F d"

let a = "a B z"
let b = 4

// 다른사람의 코드
function solution(s, n) {

    return s.split("").map((el) => { // 배열로 변환 후 맵핑 ['a', ' ', 'B', ' ', 'z'}
        if (el == " ") { // 공백이면 공백 그대로 return
            return el;
        }
        const tmp = el.charCodeAt() // 원래 문자의 ASCII 코드로 변환

        // 테스트 케이스를 줄이기 위해 기존 값을 tmp에 담아둔 후 전부 대문자로 바꿔서 비교한다. 진짜 개똑똑이네,,,
        return el.toUpperCase().charCodeAt() + n > 90 // 대문자로 변환 후 ASCII 변환 해서 n 만큼 밀은 값이 90보다 큰 경우 (90이 Z)
            ? String.fromCharCode(tmp + n - 26) // true : tmp에 n을 밀고 -26을 해서 원래 글자에 밀어서 다시 문자로 변환
            : String.fromCharCode(tmp + n) // false : 기존 tmp 값에 n을 밀고 그대로 문자로 변환
    }).join('') // map()에서 반환한 배열을 join()으로 묶어 문자로 반환

}

console.log(solution(a, b))