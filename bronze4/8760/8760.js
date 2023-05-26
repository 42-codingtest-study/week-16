//문제: 8760
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  input.forEach((e) => {
    let a = e
      .split(" ")
      .map(Number)
      .reduce((sum, now) => sum * now, 1);
    if (a % 2 === 0) console.log(a / 2);
    else console.log((a - 1) / 2);
  });
}
