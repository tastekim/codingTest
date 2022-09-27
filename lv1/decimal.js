// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
//
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
//
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요
let a = "2three45sixseven";

function solution(s) {
    const cards = [
        {str : 'zero', num : 0},
        {str : 'one', num : 1},
        {str : 'two', num : 2},
        {str : 'three', num : 3},
        {str : 'four', num : 4},
        {str : 'five', num : 5},
        {str : 'six', num : 6},
        {str : 'seven', num : 7},
        {str : 'eight', num : 8},
        {str : 'nine', num : 9}
    ]
    for (let card of cards) {
        s = s.replaceAll(card.str, card.num)()
    }

    return parseInt(s);
}
console.log(solution(a))


// 다른사람의 코드
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) { // number[i] = i -> 'zero' = 0
        let arr = answer.split(numbers[i]); // numbers[i]인 단어로 매개변수를 split()한다.
        answer = arr.join(i); // numbers[i]로 split()된 배열을 i로 묶어준다.
    }

    return Number(answer);
}
// split과 join을 그저 문자열<->배열 변환 으로만 사용하던 내게 뒤통수 따악,,