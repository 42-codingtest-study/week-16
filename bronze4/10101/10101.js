//문제: 10101
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b, c] = [+input[0], +input[1], +input[2]];
  let n = input.reduce((acc, now) => acc + +now, 0);
}
