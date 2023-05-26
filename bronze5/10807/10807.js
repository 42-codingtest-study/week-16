//문제: 10807
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  let arr = input.shift().split(" ").map(Number);
  let num = +input[0];
  let answer = 0;
  arr.forEach((e) => {
    if (e === num) answer += 1;
  });
  console.log(answer);
}
