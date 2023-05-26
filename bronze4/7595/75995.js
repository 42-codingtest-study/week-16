//문제: 75995
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "0") return;
    for (let i = 1; i <= +e; i++) {
      let answer = "";
      for (let j = 1; j <= i; j++) {
        answer += "*";
      }
      console.log(answer);
    }
  });
}
