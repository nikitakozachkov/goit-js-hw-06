const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  const DATA_EMAIL = event.currentTarget.elements.email.value;
  const DATA_PASSWORD = event.currentTarget.elements.password.value;

  event.preventDefault();

  if (DATA_EMAIL === "" || DATA_PASSWORD === "") {
    alert("Все поля должны быть заполнены!");
  }

  const formData = {
    DATA_EMAIL,
    DATA_PASSWORD,
  };
  
  console.log(formData);

  formRef.reset();
}