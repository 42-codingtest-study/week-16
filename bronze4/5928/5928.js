//문제: 5928
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [d, h, m] = input[0].split(" ").map(Number);
  let answer = d * 24 * 60 + h * 60 + m - (11 * 24 * 60 + 11 * 60 + 11);
  answer > 0 ? console.log(answer) : console.log(-1);
}
