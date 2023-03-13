//문제: 26766
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const write_heart = () => {
    console.log(
      " @@@   @@@ \n@   @ @   @\n@    @    @\n@         @\n @       @ \n  @     @  \n   @   @   \n    @ @    \n     @     "
    );
  };
  let n = +input[0];
  for (let i = 0; i < n; i++) {
    write_heart();
  }
}
