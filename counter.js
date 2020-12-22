var counter = document.getElementById("counter");

function plus() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
function minus() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function multiplyByThree() {
  counter.innerHTML = parseInt(counter.innerHTML) * 3;
}

function clear1() {
  counter.innerHTML = 0;
}
