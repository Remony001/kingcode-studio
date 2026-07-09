const words = [
    "Professional Web Developer",
    "HTML • CSS • JavaScript",
    "Building Modern Websites"
];
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    ).then(function(){

        document.getElementById("status").textContent =
        "✅ Message sent successfully!";

        form.reset();

    }, function(){

        document.getElementById("status").textContent =
        "❌ Failed to send message.";

    });

});
