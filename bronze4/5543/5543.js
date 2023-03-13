//문제: 5543
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c, d, e] = [
    input[0],
    input[1],
    input[2],
    input[3],
    input[4],
  ].map(Number);
  console.log(Math.min(...[a, b, c]) + Math.min(...[d, e]) - 50);
}
