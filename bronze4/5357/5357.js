//문제: 5357
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  input.forEach((e) => {
    let result = "";
    result += e[0];
    for (let i = 1; i < e.length; i++) {
      if (e[i] !== e[i - 1]) result += e[i];
    }
    console.log(result);
  });
}
