//수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];


function solution(participant, completion) {
    participant.sort(); // 각 배열을 유니코드 순으로 정렬한다.
    completion.sort(); //
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) { // 완주하지 못한 선수는 한명이기 때문에 동명이인이 있더라도 같은 순으로 나열이 되서 매칭이 안되는 순간 참가자[i]에 있는 사람이 완주자 리스트에 없는 사람이 된다.
            return participant[i]; // 나오는 순간 바로 return. return이 이렇게 중간에 나와도 되는지 처음 알았다. 꼭 함수 마지막에 나와야 하는줄 ;
        }
    }

}

console.log(solution(participant, completion));