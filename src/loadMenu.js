import img1 from './imgs/img1.png';
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.png';
import img4 from './imgs/img4.png';

export function loadMenu() {
    const contentDiv = document.getElementById("content");
    const menu = document.createElement("div");
    menu.classList.add("content-menu", "content-default");

    function createDish(imgSrc, dishName) {
        const dish = document.createElement("div");
        dish.classList.add("dishDiv");

        const img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("img-menu");

        const dishText = document.createElement("span");
        dishText.textContent = dishName;
        dishText.classList.add("dishName-menu");

        dish.appendChild(dishText);
        dish.appendChild(img);

        return dish;
    }

    const dishes = [
        { imgSrc: img1, dishName: "Delicious Boat" },
        { imgSrc: img2, dishName: "Great Table Of Sushi" },
        { imgSrc: img3, dishName: "Cool Soup" },
        { imgSrc: img4, dishName: "Small Cute Boat" }
    ];

    dishes.forEach(({ imgSrc, dishName }) => {
        const dish = createDish(imgSrc, dishName);
        menu.appendChild(dish);
    });

    contentDiv.appendChild(menu);
}