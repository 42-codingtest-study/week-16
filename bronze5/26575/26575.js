//문제: 26575
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  input.forEach((e) => {
    const [d, f, p] = e.split(" ").map(Number);
    let result = "$";
    result += Math.round(d * f * p * 100);
    arr = result.split("");
    arr.splice(arr.length - 2, 0, ".");
    console.log(arr.join(""));
  });
}
