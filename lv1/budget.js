// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다.
// 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
//
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.
// 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
//
// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때,
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
//

let d = [1,3,2,5,4]; // 각 부서의 신청금액
let budget = 9; //budget

function solution(d, budget) {
    let count = 0; // 최대 지원가능한 부서의 갯수 카운팅
    let answer = d.sort((a, b) => a - b).forEach(o => { // d를 오름차순으로 정렬. 가장 적은 지원금부터 지원해야 가장 많은 부서를 지원할 수 있다고 생각했음.
        if (budget - o >= 0) { // 앞에서부터 budget에서 빼면서 0이상이면 카운팅을 해준다.
            budget = budget - o;
            count++;
        }
        return count; // budget 안에서 지원 가능한 횟수가 가장 큰 경우
    })
    return count;
}

console.log(solution(d, budget))