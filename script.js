// option 1
// window.onload = function () {
//   document.getElementById("my-div").style.backgroundColor = "red"
//   document.getElementById("my-div").style.display = "block"
// }

let isDivVisible = false

// option 2
document.addEventListener("DOMContentLoaded", function () {
  console.log(isDivVisible)
})

function showOrHideContent() {
  console.log(isDivVisible)
  if (isDivVisible == true) {
    document.getElementById("my-div").style.display = "none"
    isDivVisible = false
  } else {
    document.getElementById("my-div").style.display = "block"
    isDivVisible = true
  }
}

function changeColor() {
  const color = document.querySelector("input[name='color']").value
  document.getElementById("my-div").style.backgroundColor = color
}

function sendMessage() {
  document.querySelector("input[name='email']").value = ""
  document.querySelector("input[name='fullname']").value = ""
  document.getElementById("message").value = ""

  document.getElementById("message-window").style.display = "block"
}