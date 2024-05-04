import * as css from "./style.css";
import {loadHome} from "./loadHome.js";
import {loadMenu} from "./loadMenu.js";
import {loadAbout} from "./loadAbout.js";
import icon from './imgs/icon.png';


window.addEventListener('load', loadHome);

const btnHome = document.getElementById("btn-home");
const btnMenu = document.getElementById("btn-menu");
const btnAbout = document.getElementById("btn-about");
const iconDiv = document.getElementById("icon-sushi-1");
const iconDiv2 = document.getElementById("icon-sushi-2");

iconDiv.src = icon;
iconDiv2.src = icon;

function contentClean() {
    const contentDiv = document.getElementById("content");
    const childElement = contentDiv.querySelector(":first-child");
    
    if (childElement) {
        contentDiv.removeChild(childElement);
    } else {
        console.log("No child element found in content div.");
    }
}

btnHome.addEventListener("click", () => {contentClean(), loadHome()});
btnMenu.addEventListener("click", () => {contentClean(), loadMenu()});
btnAbout.addEventListener("click", () => {contentClean(), loadAbout()});