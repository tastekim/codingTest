// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

let n = 3;
let m = 12;

function solution(n, m) {
    let answer = [0, 0]; // return 해줄 배열 [0, 0]은 최대공약수와 최소공배수를 각각 위치에 맞게 넣어주려고.
    let nums = [n, m].sort((a, b) => a - b); // 오름차순 정렬 -> 최대공약수는 두 매개변수 중 작은값 이상이 나올 수 없기 때문에 매개변수가 오름차순으로 들어올 거란 확신이 없어서 미리 해둠.
    for (let i = 1; i <= nums[0]; i++) { // 오름차순으로 정렬 한 후 작은 값을 기준으로 for문 반복.
        if ((nums[0] % i == 0) && (nums[1] % i) == 0) answer[0] = i; // n도 나눠지고 m도 나눠지면 answer[0]에 계속 재할당 -> 마지막에 들어있는 숫자가 최대공약수.
    }
    let mul = m.valueOf(); // 최소공배수는 answer의 큰값의 배수를 작은값으로 나눠지는 수 중에 가장 작은 수이기 때문에 mul에 m의 데이터를 복사. m을 그대로 사용하거나 선언하면 m까지 수정되기 때문.
    while (answer[1] == 0) { // while 조건문은 현재 answer[1] = 0으로 해놨기 때문에 0이 아니라면 최소공배수가 밑에 조건문에서 나왔기 때문에 0 외에 새로운 값으로 대체될때까지 반복.
        if (mul % n == 0) {
            answer[1] = mul;
        } else {
            mul = mul + m // m의 배수
        }
    }
    return answer;
}

console.log(solution(n, m))

// 다른사람의 코드 : 유클리드 호제법
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){} // for문을 이렇게도 쓸수 있다니,,, 주입식 교육의 참담함,,,
    return [b, ab/b];
}

console.log(gcdlcm(2, 5))
