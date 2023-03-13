//문제: 6888
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let x = +input[0];
  let y = +input[1];
  for (let i = x; i <= y; i += 60) {
    console.log(`All positions change in year ${i}`);
  }
}
