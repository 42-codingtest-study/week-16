//문제: 5522
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let a = 0;
  input.forEach((e) => {
    a += +e;
  });
  console.log(a);
}
