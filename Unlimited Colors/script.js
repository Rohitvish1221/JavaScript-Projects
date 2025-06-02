//Generate a Random Color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(randomColor());
let intervalId;

const startChangingColor = function () {
        
    if(!intervalId){
        intervalId = setInterval(changeBGColor,1000);
    }

        function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
    }
};


const stopChangingColor = function () {
    clearInterval(intervalId);
    console.log("stop")
    intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
