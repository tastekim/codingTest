// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
    return arr.reduce((a, c) => a + c) / arr.length; // arr의 요소를 하나씩 누산 후 arr의 길이로 나눈 몫
}