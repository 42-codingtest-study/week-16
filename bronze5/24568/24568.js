//문제: 24568
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  console.log(+input[0] * 8 + +input[1] * 3 - 28);
}
