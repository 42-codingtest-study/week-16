//문제: 5575
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    const [a, b, c, d, f, g] = e.split(" ").map(Number);
    let start = a * 3600 + b * 60 + c;
    let end = d * 3600 + f * 60 + g;
    let time = end - start;
    let h = parseInt(time / 3600);
    time = time % 3600;
    let m = parseInt(time / 60);
    time = time % 60;
    let s = time;
    console.log(`${h} ${m} ${s}`);
  });
}
