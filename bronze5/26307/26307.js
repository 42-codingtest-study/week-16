//문제: 26307
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [h, m] = input[0].split(" ").map(Number);
  console.log((h - 9) * 60 + m);
}
