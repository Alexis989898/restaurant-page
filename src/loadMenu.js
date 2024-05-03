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
        { imgSrc: "../imgs/img1.png", dishName: "Delicious Boat" },
        { imgSrc: "../imgs/img2.png", dishName: "Great Table Of Sushi" },
        { imgSrc: "../imgs/img3.png", dishName: "Cool Soup" },
        { imgSrc: "../imgs/img4.png", dishName: "Small Cute Boat" }
    ];

    dishes.forEach(({ imgSrc, dishName }) => {
        const dish = createDish(imgSrc, dishName);
        menu.appendChild(dish);
    });

    contentDiv.appendChild(menu);
}