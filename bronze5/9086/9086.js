//문제: 9086
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let n = input.shift();
  input.forEach((e) => {
    let answer = "";
    const str = e.split("");
    answer += str[0];
    answer += str[e.length - 1];
    console.log(answer);
  });
}
