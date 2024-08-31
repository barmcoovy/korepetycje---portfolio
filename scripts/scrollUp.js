const appArrow = document.querySelector("#up-arrow");

document.addEventListener("scroll",(e)=>{
    window.scrollY < 100 ? appArrow.style.display = "none" : appArrow.style.display = "block"
})
appArrow.addEventListener("click",()=>{
    window.scrollTo(0,0);
})