//문제: 14652
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [n, m, k] = input[0].split(" ").map(Number);
  console.log(`${parseInt(k / m)} ${k % m}`);
}
