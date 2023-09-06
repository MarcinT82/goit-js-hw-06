const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");
textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === parseInt(dataLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
