//문제: 25304
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let want_sum = +input.shift();
  let n = +input.shift();
  let sum = 0;
  input.map((e) => {
    const [a, b] = e.split(" ").map(Number);
    sum += a * b;
  });
  want_sum === sum ? console.log("Yes") : console.log("No");
}
