let divContainer = document.querySelector("#boxcontainer");
let sliderElement = document.querySelector("#slider");
let resetButton = document.querySelector("#resetbutton")


sliderElement.addEventListener("change", () => {
  let squares = slider.value;

  divContainer.innerHTML = "";

  divContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  divContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

  for (let i = 0; i < (squares * squares); i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    divContainer.appendChild(squareDiv);
  }

  let gridArea = document.querySelectorAll(".square");

  gridArea.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.add("hoverbox");
    })
  })


  resetButton.addEventListener("click", () => {
    gridArea.forEach(square => {
      square.classList.remove("hoverbox");
    })
  })

})





/*
function getSquares() {

  function getSliderValue() {
    let sliderValue = sliderElement.value;
    return sliderValue * sliderValue;
  }

  let manySquares = getSliderValue();

  for (let i = 0; i <  manySquares; i++) {
    let squareDiv = document.createElement("div");


    squareDiv.classList.add("square");
    divContainer.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", () => {
      squareDiv.classList.add("hoverbox");
    })
  }
}

sliderElement.addEventListener("input", getSquares())


function removeSquares() {
  document.querySelectorAll("square").remove();
}

*/