const button = document.getElementById("btn");

button.addEventListener("click", function () {

    alert("👋 Hello! Thank you for visiting KingCode Studio.\n\nI'm available for web development projects.");

    button.innerHTML = "Thanks for Visiting!";

    button.style.background = "#22c55e";
    button.style.color = "white";

});
