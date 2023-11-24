let user_input;
const inputElement = document.getElementById("number");
const submit = document.getElementById("submit");
const results = document.getElementById("result");
const primeNumbers = document.getElementsByClassName("primeNumbers");
const primeList = document.getElementById("primeNumbers");
let totalPrime = 0;
let numberArray = []


user_input = Number(inputElement.value);

function primeNum() {
    
    firstloop: for (let i = 2; i <= user_input; i++) {
        for (let x = 2; x < i; x++) {
            if (i % x === 0) {
                continue firstloop;
            }
        }

        numberArray += i + ", <br>";

        // document.write((totalPrime + 1) + ":  " + i +" |Prime Number| <br>");
        totalPrime += 1;
    }
    console.log("Generated Result : "+totalPrime);
    results.innerHTML = totalPrime
    console.log(numberArray);
    primeList.innerHTML = numberArray;
}

function checkNum() {
    user_input = Number(inputElement.value);
    if (user_input === undefined || user_input === null || user_input === "") {
        document.write("Please enter a number");
    } else if (user_input === 1) {
        document.write("Enter more than 1");
    } else if (user_input < 1 || !Number.isInteger(user_input)) {
        document.write("Enter a positive integer number");
    } else {
        primeNum();
    }
}