//문제: 5341
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  while (+input[0]) {
    let n = +input.shift();
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    console.log(result);
  }
}
