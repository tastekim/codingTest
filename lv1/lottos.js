//로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. 1
//
// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
// 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
// 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

let a = [44, 3, 34, 0, 0, 8];
let b = [45, 4, 35, 20, 22, 9];

// 최종 수정본
function solution(lottos, win_nums) {
    let zero = lottos.filter(z => z == 0).length; // 0의 갯수
    let luck = lottos.filter(o => (win_nums.includes(o))).length; // 로또번호와 일치하는 번호 갯수
    if (zero <= 1 && luck == 0) return [6, 6]; // zero도 0이고 luck도 0이면 최고/최소 순위는 6위밖에 없다.
    return zero != 0 && luck == 0 ? [7 - (luck + zero), 7 - (luck + 1)] : [1, 6]; // 아 이게 테스트케이스는 통과했는데 케이스에 없는 경우의 수도 존재하는 것 같다.
    //기존 제출한 코드에는 zero가 2이고 luck이 0인 경우 [5, 6]을 반환해야 하는데 [1, 6]으로 반환했었다. 그런데도 테스트케이스에 통과 했다. 현 코드는 최종 수정본.
}


// zero가 2이고 luck이 0인 경우 [5, 6]이 반환되야 하는데 [1, 6]으로 반환되고 어이없게 프로그래머스에서도 정답으로 인지한 코드
function solution(lottos, win_nums) {
    let zero = lottos.filter(z => z == 0).length;
    let luck = lottos.filter(o => (win_nums.includes(o))).length;
    if (zero == 0 && luck == 0) return [6, 6];
    return zero == 6 || luck == 0 ? [1, 6] : [7 - (luck + zero), 7 - luck];
}


console.log(solution(a, b))
