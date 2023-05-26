//문제: 25372
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  input.forEach((e) => {
    if (e.length >= 6 && e.length <= 9) {
      console.log("yes");
    } else console.log("no");
  });
}
