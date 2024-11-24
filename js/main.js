const canvas = document.getElementById("canvas");
console.log(canvas.clientHeight / 10 + "px");

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// TODO: Make the createCanvas function faster.
function createCanvas(CellNumber) {
    for (let x = 0; x < CellNumber; x++) {
        for (let y = 0; y < CellNumber; y++){
            let cell = document.createElement("div");
            cell.classList.add("canvasElement");
            let size =  canvas.clientHeight / CellNumber;
            let color = random_rgba()
            cell.setAttribute("style", `display:block; width:${size}px; height:${size}px; background-color: ${color}`);
            canvas.appendChild(cell);
        }
    }
}

createCanvas(64);