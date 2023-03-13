//문제: 4714
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "-1.0") return;
    let earth_weight = parseFloat(e).toFixed(2);
    let moon_weight = parseFloat(e * 0.167).toFixed(2);
    console.log(
      `Objects weighing ${earth_weight} on Earth will weigh ${moon_weight} on the moon.`
    );
  });
}

// 소수점 몇번째 자리에 고정할때 parseFloat 이후 .toFixed(2)등으로 2자리 고정 등이됨