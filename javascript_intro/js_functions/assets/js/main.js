// JS Funktionen

function showConsoleOutput() {
    console.log("Hallo");
}

showConsoleOutput();

function showConsoleOutput2(outputTexxt) {
    console.log(outputTexxt);
}

showConsoleOutput2("Guten Morgen!");
showConsoleOutput2("Guten Tag!");
showConsoleOutput2("Guten Abend!");


function greetUser(firstName, lastName) {
    console.log("Guten Tag " + firstName + " " + lastName + " schön, dass du wieder da bist!");
}

greetUser("Suat", "Ucar");


function greetUser2(firstName, lastName) {
    const greeting_output = document.body.querySelector("#greeting_output");

    greeting_output.textContent = "Guten Tag " + firstName + " " + lastName + " schön, dass du wieder da bist!"
}

greetUser2("Suat", "Ucar");


function sayHello() {
    console.log("Say Hello");
}


// form

function showUser() {
    const userName = document.body.querySelector("form input:nth-of-type(1)");
    const userEmail = document.body.querySelector("form input:nth-of-type(2)");
    
    console.log(userName.value);
    console.log(userEmail.value);
}

// classlist
// add
// remove
// toggle

// .bigFont, . smallFont, fontColor

const headline = document.body.querySelector("h1");
// console.log(headline);

headline.classList.add("smallFont");
headline.classList.remove("smallFont");

function changeColor() {
    headline.classList.toggle("fontColor");
    headline.classList.toggle("bigFont");
}