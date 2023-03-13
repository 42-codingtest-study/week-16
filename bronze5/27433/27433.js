//문제: 27433
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  result = 1n;
  for (let i = 2; i <= +input[0]; i++) {
    result *= BigInt(i);
  }
  console.log(result.toString());
}
