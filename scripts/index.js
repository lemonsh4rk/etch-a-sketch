let divContainer = document.querySelector("#boxcontainer");
let squareDiv;


for (let i = 0; i < 256 ; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  divContainer.appendChild(squareDiv);

  squareDiv.addEventListener("mouseover", () => {
    squareDiv.classList.add("hoverbox");
  })
}

