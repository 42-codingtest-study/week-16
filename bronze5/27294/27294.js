//문제: 27294
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const [time, drink] = input[0].split(" ").map(Number);
  if (drink) return console.log("280");
  else {
    if (12 <= time && time <= 16) console.log("320");
    else console.log("280");
  }
}
