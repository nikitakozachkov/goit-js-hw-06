const refs = {
  input: document.querySelector("#font-size-control"),
  value: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);


function onInputChange (event) {
  refs.value.style.fontSize = `${event.currentTarget.value}px`;
}
