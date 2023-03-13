//문제: 7891
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let trash = input.shift();
  input.forEach((e) => {
    const [a, b] = e.split(" ").map(BigInt);
    console.log((a + b).toString());
  });
}
