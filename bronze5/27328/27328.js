//문제: 27328
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  if (a > b) console.log(1);
  else if (a < b) console.log(-1);
  else console.log(0);
}
