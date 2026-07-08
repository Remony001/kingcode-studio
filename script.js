const text = "Professional Web Developer | HTML | CSS | JavaScript";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

function contactMe(){

alert("🚀 Thanks for choosing KingCode Studio!\n\nEmail: onyekazichukwumakingsley@gmail.com\nWhatsApp: +2349031135866");

}
