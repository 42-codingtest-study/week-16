//문제: 26574
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  for (let i = 0; i < n; i++) {
    console.log(`${input[i]} ${input[i]}`);
  }
}
