const canvas = document.getElementById("canvas");
console.log(canvas.clientHeight / 10 + "px");

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// TODO: Make the createCanvas function faster.
function createCanvas(CellNumber) {
    let cell = document.createElement("div");
    let size =  canvas.clientHeight / CellNumber;
    cell.setAttribute("style", `display:block; width:${size}px; height:${size}px;`);
    for (let x = 0; x < CellNumber; x++) {
        for (let y = 0; y < CellNumber; y++){
            let clone = cell.cloneNode(true);
            clone.addEventListener("mouseenter", () =>{
                clone.style.backgroundColor = random_rgba();
            });
            canvas.appendChild(clone);
        }
    }
}

createCanvas(64);

