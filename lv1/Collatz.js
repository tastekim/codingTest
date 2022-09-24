//1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면,
// 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
//
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다.
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
// 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

function solution(num) {
    let answer = 0;
    let n = num;
    let i = 0;
    if (num === 1) {
        return answer;
    }
    while (i <= 500 && n != 0) { //500번 까지 반복
        if (n == 1) { // num이 1일 경우
            return answer += i;
        } else if (n % 2 > 0 ) { // 홀수의 경우
            n *= 3;
            n += 1;
        } else { // 짝수의 경우
            n /= 2;
        }
        i++;
    }
    return answer = -1;
}


//다른사람의 코드
function collatz(num) {
    var answer = 0; // 계산한 횟수
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1; // num이 1도 아니고 계산횟수도 500회가 안넘었을때 홀짝 조건문으로 계산
        answer++;
    }
    return num == 1 ? answer : -1; // num이 1인 경우 answer기본값인 0이 return, 그 외에는 answer 가 500을 초과하는 경우이기 때문에 -1 return
}

// 넘나깔끔하다,.,,


console.log(collatz(1))