const tlTech = $(".header_right-body-name");
const bgheader = document.querySelector(".background__header");
const arr = [
    'url("../assets/image/cameraheader.png")',
    'url("../assets/image/backgroun2.jpg")',
    'url("../assets/image/background3.jpg")',
];
let index=0;
function changeBg(){
    setInterval(() => {
        bgheader.style.backgroundImage=arr[index];
        index++;
        if(index==3)
        {
            index=0;
        }
    }, 4000);
}
function changeColor()
{
    setInterval((function(){
        tlTech.css("color","red");
        const id = setTimeout((function(){
            tlTech.css("color","white");
            clearInterval(id);
        }),1000);   
    }),2000);
}
changeColor();
changeBg();