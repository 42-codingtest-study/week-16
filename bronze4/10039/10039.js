//문제: 10039
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let result = 0;
  input.forEach((e) => {
    if (+e < 40) result += 40;
    else result += +e;
  });
  console.log(result / 5);
}
