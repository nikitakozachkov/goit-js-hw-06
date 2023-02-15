const refs = {
  boxContainer: document.querySelector("#boxes"),
  input: document.querySelector("#controls > input"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
}

refs.createButton.addEventListener("click", () => createBoxes(refs.input.value));
refs.destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let boxSize = 20;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize += 10}px`;
    box.style.height = `${boxSize}px`;

    refs.boxContainer.appendChild(box);
  }
}

function destroyBoxes() {
  refs.boxContainer.innerHTML = "";
  refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
