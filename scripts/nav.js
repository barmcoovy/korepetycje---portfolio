const navigation = document.querySelector("#navigation");
const links = ["O mnie", "Oferta", "Kontakt"];

for(let i =0; i<links.length;i++){
    navigation.innerHTML +=`<span class='link'><a href="#${links[i].toLowerCase().replace(" ","-")}">${links[i]}</a></span>`;
}