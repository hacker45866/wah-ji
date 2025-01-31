const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is my biggest blessing. I love you.";
    gif.src = "https://media2.giphy.com/media/bEVuKfZTFn1XvBAQqJ/giphy.gif";
    noBtn.style.display = "none";

    // Telegram Bot Token aur Chat ID
    const botToken = "7801146737:AAE5P6QBDiex74kWz1IC3EGldWf0axgEaH0";  // Yahan apna bot token daalo
    const chatId = "6363036969";  // Yahan apna Telegram ID daalo

    // Message jo bhejna hai
    const message = "🚀 Someone clicked YES! 🎉";

    // API request bhejna
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => console.log("Message sent successfully!", data))
        .catch(error => console.error("Error sending message:", error));
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
