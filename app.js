let colorThemeIconElement;
const sunIconPath = "sun.svg";
const moonIconPath="moon.svg";

document.addEventListener(`DOMContentLoaded`, function()
{
    colorThemeIconElement = document.getElementById("color-theme-switch");
    colorThemeIconElement.onclick = toggleDarkMode;
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // toggled dark mode if user has system set to dark mode
    {
        toggleDarkMode();
    }


}, false);


function toggleDarkMode()
{
    if (colorThemeIconElement.getAttribute("src") == moonIconPath)
    {
        colorThemeIconElement.src = sunIconPath;
        console.log("sun");
    }
    else 
    {
        console.log(colorThemeIconElement.src);
        colorThemeIconElement.src = moonIconPath;
        console.log("moon");
    }

    document.body.classList.toggle("dark-mode");
    
}