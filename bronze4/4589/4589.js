//문제: 4589
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = +input.shift();
  console.log("Gnomes:");
  input.forEach((e) => {
    const [a, b, c] = e.split(" ").map(Number);
    if ((a > b && b < c) || (a < b && b > c)) console.log("Unordered");
    else console.log("Ordered");
  });
}
