let grayScaleMode = false;

let thumbs = document.querySelectorAll(".Thumb");
let mainImg = document.querySelector("#mainImg");

function clickOnThumb(event) {
  let newSrc = event.target.src;
  if (grayScaleMode === true) {
    mainImg.src = newSrc + "?grayscale";
  } else {
    mainImg.src = newSrc;
  }

  thumbs.forEach(function (thumb) {
    thumb.classList.remove("Thumb-isSelected");
  });
  event.target.parentNode.classList.add("Thumb-isSelected");
}

thumbs.forEach(function (thumb) {
  thumb.addEventListener("click", clickOnThumb);
});

let buttonMode = document.querySelector("#ButtonMode");

function clickOnButtonMode() {
  if (grayScaleMode === true) {
    grayScaleMode = false;
    buttonMode.textContent = "Grayscale mode";
    mainImg.src = mainImg.src.replace("?grayscale", "");
  } else {
    grayScaleMode = true;
    buttonMode.textContent = "Normal mode";
    mainImg.src = mainImg.src + "?grayscale";
  }

  // grayScaleMode = !grayScaleMode
}

buttonMode.addEventListener("click", clickOnButtonMode);