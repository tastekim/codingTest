let a = "abcdefghijklmn.p";

function solution(new_id) {
    let id1 = new_id.toLowerCase();
    let reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim;
    let id2 = id1.replace(reg, "")
    while (id2.match(/\.\./g) !== null) {
        id2 = id2.replaceAll(/\.\./g, '.')
    }
    let id3 = id2;
    let id4 = id3.replace(/\.$/, '').replace(/^\./, '')
    id4 = id4.replace(/\.$/, '').replace(/^\./, '')
    id4 = id4.replace(/\.$/, '').replace(/^\./, '')
    id4 = id4.replace(/\.$/, '').replace(/^\./, '')
    id4 = id4.replace(/\.$/, '').replace(/^\./, '')
    id4 = id4.replace(/\.$/, '').replace(/^\./, '')
    if (id4 == '') id4 = 'a';
    let id5 = ''
    if (id4.length > 15) {
        id4 = id4.substring(0, 15);
    }
    id4 = id4.replace(/\.$/, '').replace(/^\./, '')
    if (id4.length < 3) {
        while (id4.length !== 3 ) {
            id4 += id4[id4.length-1];
        }
        return  id4
    }
    return id4;
}

console.log(solution(a))


// 다른사람의 코드
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

