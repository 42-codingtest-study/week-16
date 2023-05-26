//문제: 27219
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  answer = "";
  for (let i = 0; i < parseInt(+input[0] / 5); i++) {
    answer += "V";
  }
  for (let i = 0; i < +input[0] % 5; i++) {
    answer += "I";
  }
  console.log(answer);
}
