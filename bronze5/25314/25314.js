//문제: 25314
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let answer = "";
  for (let i = 0; i < n / 4; i++) {
    answer += "long ";
  }
  console.log(`${answer}int`);
}
