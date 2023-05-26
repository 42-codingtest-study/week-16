//문제: 3733
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    const [a, b] = e.split(" ").map(Number);
    console.log(parseInt(b / (a+1)));
  });
}
