//문제: 8710
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = input[0].split(" ").map(Number);
  (b - a) % c === 0
    ? console.log(parseInt((b - a) / c))
    : console.log(parseInt((b - a) / c) + 1);
}
