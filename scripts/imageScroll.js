const leftScroll = document.querySelector("#left-scroll");
const rightScroll = document.querySelector("#right-scroll");
const image = document.querySelector("#oferta-image");
let imageSrc = 1;
leftScroll.addEventListener("click",()=>{
    image.classList.add("none");
    image.classList.remove("load");
    
    setTimeout(()=>{
        imageSrc--;
    if(imageSrc < 1) imageSrc = 3;
        image.src = `media/${imageSrc}.jpg`;
        image.classList.remove("none");
        image.classList.add("load");
    },100)
    
})
rightScroll.addEventListener("click",()=>{
    image.classList.add("none");
    image.classList.remove("load");
    setTimeout(()=>{
        imageSrc++;
        if(imageSrc > 3) imageSrc = 1;
        image.src = `media/${imageSrc}.jpg`;
        image.classList.remove("none");
        image.classList.add("load");
        
    },100)
})