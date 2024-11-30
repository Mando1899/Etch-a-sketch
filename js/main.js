const canvas = document.getElementById("canvas");

let mode = "color";

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
slider.addEventListener("input", function(event) {
    createCanvas(event.target.value);
    sliderValue.innerText = `${event.target.value}x${event.target.value}`;
});

const colorInput = document.getElementById("color-input");
let brushColor = colorInput.value;
colorInput.addEventListener("input", function(){
    brushColor = colorInput.value;    
});

let MouseBtnDown = false;
document.addEventListener("mousedown", function(event) {
    if (event.button === 0){
        MouseBtnDown = true;
    }
});

document.addEventListener("mouseup", function(event) {
    if (event.button === 0){
        MouseBtnDown = false;
    }
});

const colorModeBtn = document.getElementById("color");
colorModeBtn.addEventListener("click", () => {
    mode = "color";
});

const rainbowModeBtn = document.getElementById("rainbow");
rainbowModeBtn.addEventListener("click", () => {
    mode = "rainbow";
});

const eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", () => {
    mode = "eraser";
});

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () =>{
    createCanvas(slider.value);
});

document.querySelectorAll(".mode").forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementsByClassName("active-btn")[0].classList.remove("active-btn");
        button.classList.add("active-btn");
    })
});


function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}





function createCanvas(CellNumber) {
    let cell = document.createElement("div");
    let size =  canvas.clientHeight / CellNumber;
    cell.setAttribute("style", `display:block; width:${size}px; height:${size}px;`);
    canvas.innerHTML = "";
    for (let x = 0; x < CellNumber; x++) {
        for (let y = 0; y < CellNumber; y++){
            let clone = cell.cloneNode(true);
            clone.addEventListener("mouseenter", () =>{
                if (MouseBtnDown) {
                    if (mode === "color") clone.style.backgroundColor = brushColor;
                    if (mode === "rainbow") clone.style.backgroundColor = random_rgb();
                    if (mode === "eraser") clone.style.backgroundColor = "";               
                }   
            });
            clone.addEventListener("mousedown", () =>{
                
                    if (mode === "color") clone.style.backgroundColor = brushColor;
                    if (mode === "rainbow") clone.style.backgroundColor = random_rgb();
                    if (mode === "eraser") clone.style.backgroundColor = "";                               
            });


            canvas.appendChild(clone);
        }
    }
}

createCanvas(8);

