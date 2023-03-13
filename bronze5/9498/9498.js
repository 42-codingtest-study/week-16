//문제: 9498
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = +input[0];
  if (a >= 90 && a <= 100) console.log("A");
  else if (a >= 80 && a <= 89) console.log("B");
  else if (a >= 70 && a <= 79) console.log("C");
  else if (a >= 60 && a <= 69) console.log("D");
  else console.log("F");
}
