//문제: 6841
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  input.forEach((e) => {
    if (e === "CU") console.log("see you");
    else if (e === ":-)") console.log("I’m happy");
    else if (e === ":-(") console.log("I’m unhappy");
    else if (e === ";-)") console.log("wink");
    else if (e === ":-P") console.log("	stick out my tongue");
    else if (e === "(~.~)") console.log("sleepy");
    else if (e === "TA") console.log("totally awesome");
    else if (e === "CCC") console.log("Canadian Computing Competition");
    else if (e === "CUZ") console.log("because");
    else if (e === "TY") console.log("thank-you");
    else if (e === "YW") console.log("you’re welcome");
    else if (e === "TTYL") console.log("talk to you later");
    else console.log(e);
  });
}
