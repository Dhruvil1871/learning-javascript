function getRandomColor(){
    //get random color everytime
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function makeGrid(){
    let container = document.querySelector(".container");

    //for clearing previuos grid
    container.innerHTML = "";
    
    let size = prompt("enter the size of the sketch-pad");
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < size * size; i++){
        
        const cell =document.createElement("div");
        cell.classList.add("cell");

        //when mouse enters the cell it gets colored
        cell.addEventListener("mouseenter", () => {
            
            //if the cel is filled once then dont fill it again
            if(!cell.style.backgroundColor){
                cell.style.backgroundColor = getRandomColor();
            }
        });

        container.appendChild(cell);
    }
}
