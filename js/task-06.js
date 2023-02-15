const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === 6) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
    return;
  }
  
  inputRef.classList.add("invalid");
}
