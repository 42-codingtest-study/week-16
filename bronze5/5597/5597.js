//문제: 5597
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const checker = new Array();
  for (let i = 1; i < 31; i++) {
    checker.push(i);
  }
  input.forEach((e) => {
    checker.splice(checker.indexOf(+e), 1);
  });
  console.log(checker[0]);
  console.log(checker[1]);
}
