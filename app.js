var pics = [
    "FunImage/Rishiflowers.jpg",
    "FunImage/IMG_6369.JPG",
    "FunImage/IMG_7008.jpg",
    "FunImage/IMG_5721.jpg",
    "FunImage/IMG_5969.jpg",
    "FunImage/IMG_5911.jpg",
    "FunImage/IMG_1141.jpg",
    "FunImage/IMG_1102.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter =1;
btn.addEventListener("click", function() {  
    if (counter >= pics.length) {
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
});