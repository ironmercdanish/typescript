//number //string //boolean
function add(num1:number, num2:number,
  printResult:boolean,sometext:string,
) {
  // if (typeof num1 === "number" &&
  //    typeof num2 === "number") {
  //   return num1 + num2;

  // }else{
  //   return +num1 + num2;
  // } 
  if(printResult){
    console.log(`${sometext} ${num1+num2}`);
    
  }else{
    return num1+num2;
  }
  // return num1+num2;
}

const n1 = 20;//number
const n2 = 20;//number
const printResult=true;
const sometext="some of two strings";

// const ans =
 add(n1, n2,printResult,sometext);
// console.log(ans);
