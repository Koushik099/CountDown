let inputbox = document.getElementById("input");
let btn = document.getElementById("btn");
let counter = document.getElementById("counter");
let x;

let countDown = () => {
  clearInterval(x);

  let value = inputbox.value;
  if (value > 0) {
    isRunning = true;
    counter.innerText = value;
    counter.style.visibility = "visible";

    x = setInterval(() => {
      value--;
      counter.innerText = value;

      if (value <= 0) {
        clearInterval(x);
      }
    }, 1000);
  } else {
    alert("Enter a Positive Number.");
  }
};

btn.addEventListener("click", countDown);
