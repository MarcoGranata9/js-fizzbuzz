const rowElem = document.querySelector(".row");
console.log(rowElem);

 for (let i = 1; i <= 100 ; i++) {

    let FizzBuzz;
    if(i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = "FizzBuzz";
        console.log(i, FizzBuzz);
    } else if (i % 3 === 0) {
        FizzBuzz = "Fizz"
        console.log(i, FizzBuzz);
    } else if (i % 5 === 0) {
        FizzBuzz = "Buzz"
        console.log(i, FizzBuzz)
    } else {
        i
        console.log(i)
    }              
}