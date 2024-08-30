const changeTime  = () =>{
const time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
if(seconds < 10) seconds = `0${seconds}`
if(minutes < 10) minutes = `0${minutes}`
if(hours < 10) hours = `0${hours}`
const dataBlock = document.querySelector("#year");
dataBlock.innerText = `Aktualny czas: ${hours}:${minutes}:${seconds}`
}
changeTime();
setInterval(changeTime,1000)