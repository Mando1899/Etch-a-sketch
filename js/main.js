const canvas = document.getElementById("canvas");
let MouseBtnDown = false

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

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

function createCanvas(CellNumber) {
    let cell = document.createElement("div");
    let size =  canvas.clientHeight / CellNumber;
    cell.setAttribute("style", `display:block; width:${size}px; height:${size}px;`);
    for (let x = 0; x < CellNumber; x++) {
        for (let y = 0; y < CellNumber; y++){
            let clone = cell.cloneNode(true);
            clone.addEventListener("mouseenter", () =>{
                if (MouseBtnDown) {
                    clone.style.backgroundColor = random_rgba();
                }
                
            });
            canvas.appendChild(clone);
        }
    }
}

createCanvas(8);

