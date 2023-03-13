//문제: 8558
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input[0];
  if (n === 0) console.log(1);
  else if (n === 1) console.log(1);
  else if (n === 2) console.log(2);
  else if (n === 3) console.log(6);
  else if (n === 4) console.log(4);
  else console.log(0);
}
