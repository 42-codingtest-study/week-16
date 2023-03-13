//문제: 16099
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.shift();
  input.forEach((e) => {
    const [a, b, c, d] = e.split(" ").map(BigInt);
    if (a * b > c * d) console.log("TelecomParisTech");
    else if (a * b < c * d) console.log("Eurecom");
  });
}
