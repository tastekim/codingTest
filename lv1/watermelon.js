function solution(n) {
    let answer = n % 2 == 0 ? '수박'.repeat(n / 2) : '수박'.repeat(n / 2) + '수'; // 자연수 n을 2로 나눠서 나머지가 0인 짝수는 몫만큼 '수박'을 반복하고 홀수인경우에는 짝수 결과에 '수'만 더 붙인다.
    return answer.replace(/ /gi,"") // str내에 모든 공백 제거
}


console.log(solution(4))

