//문제: 9316
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  for (let i = 1; i <= +input[0]; i++) {
    console.log(`Hello World, Judge ${i}!`);
  }
}
