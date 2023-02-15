const refs = {
  body: document.querySelector("body"),
  text: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
  refs.text.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.text.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
