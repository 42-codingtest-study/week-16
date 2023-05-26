//문제: 5300
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += `${i} `;
    if (i % 6 === 0) answer += "Go! ";
    else if (i === n) answer += "Go!";
  }
  console.log(answer.trim());
}
