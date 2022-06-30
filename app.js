let colorThemeIconElement;
let dateElement;
const sunIconPath = "sun.svg";
const moonIconPath = "moon.svg";
let randomNumberInputElement;
let randomNumberSubmitElement;
let randomNumberResultElement;

const randomNumber = Math.floor(Math.random() * 10) + 1;

document.addEventListener(`DOMContentLoaded`, function()
{
    colorThemeIconElement = document.getElementById("color-theme-switch");
    colorThemeIconElement.onclick = toggleDarkMode;

    dateElement = document.getElementById("date-and-time");
    dateElement.innerHTML = new Date();

    randomNumberInputElement = document.getElementById("randomNumberInput");
    randomNumberSubmitElement = document.getElementById("randomNumberSubmit");
    randomNumberResultElement = document.getElementById("randomNumberResult");

    randomNumberSubmitElement.onclick = checkInput;
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // toggled dark mode if user has system set to dark mode
    {
        toggleDarkMode();
    }


}, false);


function checkInput()
{
    if (randomNumberInputElement.value == randomNumber)
    {
        randomNumberResultElement.innerHTML = "You guessed right!"
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