// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
    let answer = Math.sqrt(n).toString().includes(".") ? -1 : (Math.sqrt(n) + 1) ** 2 //Math.sqrt(n)는 n의 제곱근을 구하는 함수다. 제곱근이 정수가 아니여도 제외되기 때문에 문자열로 변환해서
    // 제곱근이 소수점인지 확인하는 내용
    return answer;
}