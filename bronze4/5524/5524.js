//문제: 5524
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  input.forEach((e) => {
    console.log(e.toLowerCase());
  });
}
