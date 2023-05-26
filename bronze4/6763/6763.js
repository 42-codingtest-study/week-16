//문제: 6763
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let limits = +input[1] - +input[0];
  if (limits <= 0)
    console.log("Congratulations, you are within the speed limit!");
  else if (limits > 0 && limits < 21)
    console.log("You are speeding and your fine is $100.");
  else if (limits > 20 && limits < 31)
    console.log("You are speeding and your fine is $270.");
  else console.log("You are speeding and your fine is $500.");
}
