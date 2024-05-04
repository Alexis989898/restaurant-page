import img2 from './imgs/img2.png';

export function loadHome() {
    const contentDiv = document.getElementById("content");

    const home = document.createElement("div");
    home.classList.add("content-home");
    home.classList.add("content-default");

    const homeTitle = document.createElement("div");
    homeTitle.classList.add("home-title");
    homeTitle.textContent = "Silly's Sushis";

    const homeSubtitle = document.createElement("div");
    homeSubtitle.classList.add("home-subtitle");
    homeSubtitle.textContent = "Come eat the best sashimi, shrimp, hotroll, and other types of delicious fish in the best restaurant of the city!";

    const homeImg = document.createElement("img");
    homeImg.classList.add("home-img");
    homeImg.src = img2;

    homeTitle.appendChild(homeSubtitle);
    home.appendChild(homeTitle);
    home.appendChild(homeImg);
    contentDiv.appendChild(home);
}