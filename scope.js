

//activity 1
function funcFiveTimes(funcToCall)
{
    for (let i = 0; i < 5; i++)
    {
        funcToCall();
    }
}

function simpleFunction()
{
    console.log("hello codenation");
}

funcFiveTimes(simpleFunction);


//activity 2
function timesThree(num)
{
    return num*3;
}

let array = [1,2,3,4,5];
let newArray = array.map(timesThree);
console.log(newArray);


//activty 3
function add(a,b) {return a+b;}
function subtract(a,b) {return a-b;}
function multiply(a,b) {return a*b;}
function divide(a,b) {return a/b;}


function doMaths(num1)
{
    //return func(num2, funcName); //<-- what the activity wants?
    return func(2, multiply); //<-- what the activity doesn't want?

    function func(num2, funcName)
    {
        return funcName(num1,num2);
    }
}


console.log(doMaths(10));