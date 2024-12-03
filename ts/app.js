//number //string //boolean
function add(num1, num2, printResult, sometext) {
    // if (typeof num1 === "number" &&
    //    typeof num2 === "number") {
    //   return num1 + num2;
    // }else{
    //   return +num1 + num2;
    // } 
    if (printResult) {
        console.log("".concat(sometext, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
    // return num1+num2;
}
var n1 = 20; //number
var n2 = 20; //number
var printResult = true;
var sometext = "some of two strings";
// const ans =
add(n1, n2, printResult, sometext);
// console.log(ans);
