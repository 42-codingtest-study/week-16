//문제: 4299
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  c = (a + b) / 2;
  d = (a - b) / 2;
  if (c % 1 !== 0 || d % 1 !== 0 || d < 0) return console.log(-1);
  else console.log(`${c} ${d}`);
}
