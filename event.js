const text = document.getElementById("text");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  if (text.textContent == "ボタンをクリックしました。") {
    text.textContent = "ボタンをクリックしてください。";
  } else {
    text.textContent = "ボタンをクリックしました。";
  }
});
