//문제: 2475
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const arr = input[0].split(" ").map(Number);
  let answer = 0;
  arr.forEach((e) => {
    answer += e * e;
  });
  console.log(answer % 10);
}
