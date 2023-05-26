//문제: 4696
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "0") return;
    let num = Math.round(
      (1 + +e + +e * +e + +e * +e * +e + +e * +e * +e * +e) * 100
    ).toString();
    arr = num.split("");
    arr.splice(num.length - 2, 0, ".");
    console.log(arr.join(""));
  });
}
