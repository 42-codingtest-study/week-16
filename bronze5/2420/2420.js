//문제: 2420
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(BigInt);
  a - b > 0n
    ? console.log((a - b).toString())
    : console.log((b - a).toString());
}
