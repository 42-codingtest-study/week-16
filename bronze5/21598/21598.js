//문제: 21598
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  for (let i = 0; i < +input[0]; i++) {
    console.log("SciComLove");
  }
}
