const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputChange);

function onInputChange (event) {
  if (event.currentTarget.value.length >= 6) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    return;
  }
  
  inputRef.classList.add("invalid");
} 
