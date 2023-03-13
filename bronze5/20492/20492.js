//문제: 20492
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  console.log(`${n * 0.78} ${n * 0.956}`);
}
