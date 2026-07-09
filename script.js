const words = [
    "Professional Web Developer",
    "HTML • CSS • JavaScript",
    "Building Modern Websites"
];

let word = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[word];

    if(!deleting){
        typing.textContent = current.substring(0, letter++);
    }else{
        typing.textContent = current.substring(0, letter--);
    }

    let speed = deleting ? 50 : 100;

    if(!deleting && letter === current.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && letter === 0){
        deleting = false;
        word = (word + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

function contactMe(){
    alert(
`👋 Thanks for visiting KingCode Studio!

Email: onyekazichukwumakingsley@gmail.com

WhatsApp: +2349031135866`
    );
}
