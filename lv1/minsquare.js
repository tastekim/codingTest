let a = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
    let max = 0;
    let min = 0;
    let answer = sizes.forEach(o => {
        const [a, b] = o.sort((a, b) => a - b)
        if (a > max) max = a;
        if (b > min) min = b;
    })
    return max * min
}

console.log(solution(a))