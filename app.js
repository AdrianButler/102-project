let colorThemeIconElement;
let dateElement;
const sunIconPath = "sun.svg";
const moonIconPath = "moon.svg";

let randomNumberInputElement;
let randomNumberSubmitElement;
let randomNumberResultElement;
const randomNumber = Math.floor(Math.random() * 10) + 1;

let loopDemonstrationElement;
let loopNumberInputElement;
let loopSubmitButtonElement;

document.addEventListener(`DOMContentLoaded`, function()
{
    colorThemeIconElement = document.getElementById("color-theme-switch");
    colorThemeIconElement.onclick = toggleDarkMode;

    dateElement = document.getElementById("date-and-time");
    dateElement.innerHTML = new Date().toString();

    randomNumberInputElement = document.getElementById("randomNumberInput");
    randomNumberSubmitElement = document.getElementById("randomNumberSubmit");
    randomNumberResultElement = document.getElementById("randomNumberResult");
    randomNumberSubmitElement.onclick = checkInput;

    loopDemonstrationElement = document.getElementById("loop-demonstration");
    loopNumberInputElement = document.getElementById("loop-number-input");
    loopSubmitButtonElement = document.getElementById("loop-submit-button");

    loopSubmitButtonElement.onclick = loopDemo;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // toggled dark mode if user has system set to dark mode
    {
        toggleDarkMode();
    }


}, false);

function loopDemo()
{
    const timesToLoop = loopNumberInputElement.value;

    for (let i = 0; i < timesToLoop; i++)
    {
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", "https://placeholder.pics/svg/300");

        let countElement = document.createElement("p");
        countElement.appendChild(document.createTextNode((i + 1).toString()));

        loopDemonstrationElement.appendChild(countElement);
        loopDemonstrationElement.appendChild(imageElement)
    }
}


function checkInput()
{
    if (randomNumberInputElement.value == randomNumber)
    {
        randomNumberResultElement.innerHTML = "You guessed right!"
    }

    else if(typeof(randomNumberInputElement.value) != typeof(randomNumber))
    {
        randomNumberResultElement.innerHTML = "I said number doofus."
    }

    else
    {
        randomNumberResultElement.innerHTML = "Nope!"
    }
}

function toggleDarkMode()
{
    if (colorThemeIconElement.getAttribute("src") == moonIconPath)
    {
        colorThemeIconElement.src = sunIconPath;
    }
    else 
    {
        colorThemeIconElement.src = moonIconPath;
    }

    document.body.classList.toggle("dark-mode");
    
}