let divContainer = document.querySelector("#boxcontainer");



for (let i = 0; i < 256 ; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.classList.add("square")
  divContainer.appendChild(squareDiv);
}
