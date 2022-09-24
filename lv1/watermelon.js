// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
    let answer = n % 2 == 0 ? '수박'.repeat(n / 2) : '수박'.repeat(n / 2) + '수'; // 자연수 n을 2로 나눠서 나머지가 0인 짝수는 몫만큼 '수박'을 반복하고 홀수인경우에는 짝수 결과에 '수'만 더 붙인다.
    return answer.replace(/ /gi,"") // str내에 모든 공백 제거
}


console.log(solution(4))

