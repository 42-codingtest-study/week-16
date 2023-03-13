//문제: 5717
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "0 0") return;
    console.log(e.split(" ").map(Number)[0] + e.split(" ").map(Number)[1]);
  });
}
