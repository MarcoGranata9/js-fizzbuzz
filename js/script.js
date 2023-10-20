const rowElem = document.querySelector(".row");
console.log(rowElem);

let squareString = "";

for (let i = 1; i <= 100 ; i++) {

    let FizzBuzzClass;
    let FizzBuzzText;
    if(i % 3 === 0 && i % 5 === 0) {
        FizzBuzzClass = "fizzbuzz";
        FizzBuzzText = "FizzBuzz"
    } else if (i % 3 === 0) {
        FizzBuzzClass = "fizz";
        FizzBuzzText = "Fizz"
    } else if (i % 5 === 0) {
        FizzBuzzClass = "buzz";
        FizzBuzzText = "Buzz"
    } else {
        FizzBuzzClass = "number"
        FizzBuzzText = i
    }
    // console.log(i, FizzBuzz);

    squareString += `<div class="square ${FizzBuzzClass}">${FizzBuzzText}</div>`
    console.log(squareString);
}

rowElem.innerHTML = squareString