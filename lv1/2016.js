let a = 5 // 월
let b = 24 // 일

// 내가 제출한 코드
function solution(a, b) {
    let whatday = `2016-${String(a).padStart(2, '0')}-${String(b).padStart(2, '0')}`; // padStart() 값을 2 자리로 변환, 빈자리는 '0'으로 채운다 -> 두자릿수로 바꿈. String(a)는 빈자리를 채우는 0이 문자열이여서 a를 먼저 문자형으로 변환
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let answer = week[new Date(whatday).getDay()]; // Date.getDay()는 일요일부터 토요일을 0부터 6까지로 반환
    return answer;
}


console.log(solution(a,b));


function getDayName(a,b){
    var date = new Date(2016, (a - 1), b);
    console.log(date); // object
    console.log(date.toString()); // object를 string으로 반환, 근데 원래 Javascript에 내장된 toString()이랑은 다르다. 그냥 Date object를 사용하는 방법으로 이해하면 될듯.
    return date.toString().slice(0, 3).toUpperCase(); //Tue May 24 2016 00:00:00 GMT+0900 (Korean Standard Time) 에서 앞에서 3번째 이후로는 버림. toUpperCase() 대문자 변환.
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));
