//문제: 10872
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let num = +input[0];
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  console.log(result);
}
