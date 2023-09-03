const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSize.addEventListener("change", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
