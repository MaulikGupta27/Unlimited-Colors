const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const hex = "0123456789ABCDEF";


let setColors = function () {
    function singleRGB() {
        return hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)];
    }
    let allColors = singleRGB() + singleRGB() + singleRGB();

    document.querySelector("body").style.backgroundColor = `#${allColors}`;
}


let changeColors = null;

start.addEventListener("click", function () {
    if (!changeColors)
        changeColors = setInterval(setColors, 1000);
}, false);

stop.addEventListener("click", function () {
    if (changeColors)
        changeColors = clearInterval(changeColors);
    changeColors = null;
}, false);