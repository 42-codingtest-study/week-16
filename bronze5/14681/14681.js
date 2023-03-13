//문제: 14681
const [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

solution(a, b);
function solution(a, b) {
  if (a > 0) {
    if (b > 0) console.log(1);
    if (b < 0) console.log(4);
  } else {
    if (b > 0) console.log(2);
    if (b < 0) console.log(3);
  }
}
