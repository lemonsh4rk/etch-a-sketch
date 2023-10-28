let divContainer = document.querySelector("#boxcontainer");
let sliderElement = document.querySelector("#slider");
let squareDiv = document.createElement("div");

// default slider value
sliderElement.value = 16;

sliderElement.addEventListener("input", () => {
  console.log(sliderElement.value)
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