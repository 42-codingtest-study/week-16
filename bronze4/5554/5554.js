//문제: 5554
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let num = input.reduce((sum, now) => +sum + +now, 0);
  console.log(`${parseInt(num / 60)}\n${num % 60}`);
}
