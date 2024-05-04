export function loadAbout() {
    const contentDiv = document.getElementById("content");
    const about = document.createElement("div");
    about.classList.add("content-about", "content-default");

    const titleTxt = document.createElement("p");
    const mainTxt = document.createElement("p");
    const contactTxt = document.createElement("p");
    const timeTxt = document.createElement("p");

    titleTxt.classList.add("about-p");
    mainTxt.classList.add("about-p");
    contactTxt.classList.add("about-p");
    timeTxt.classList.add("about-p");


    titleTxt.textContent = "Contact Us";
    titleTxt.style.fontSize = "2rem";

    mainTxt.textContent = "Welcome to Silly's Sushi, where the joy of sushi meets a \
splash of whimsy! Have a question, a comment, or just want to share your sushi stories \
with us? We'd love to hear from you! Get in touch using any of the following methods: ";

    contactTxt.textContent = " 📞 Phone: For immediate assistance or to place an order over \
the phone, give us a call at [123-456-7890]. Our friendly sushi enthusiasts are always \
ready to chat! \
\n \n \
📧 Email: Feel like typing? Shoot us an email at [info@sillysushi.com]. Whether it's \
a reservation request, feedback, or a sushi joke, we're all ears! \
\n \n \
🏢 Visit Us: If you're in the neighborhood, why not drop by and say hello? You can \
find us at [123 Sushi Street, Sushiville, CA]. Our doors are always open to fellow sushi\
lovers!";

    timeTxt.textContent = `🕒 Opening Hours: We're here to satisfy your sushi cravings during the following hours:
    Monday to Friday: [11:00 AM - 9:00 PM]
    Saturday and Sunday: [12:00 PM - 10:00 PM]`;

    about.appendChild(titleTxt);
    about.appendChild(mainTxt);
    about.appendChild(contactTxt);
    about.appendChild(timeTxt);


    contentDiv.appendChild(about);
}