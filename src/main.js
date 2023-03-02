const controls = document.querySelectorAll('[data-control]');

controls.forEach((element) => {
  element.addEventListener('click', () => {
    manipulateParts(element.dataset.control, element.parentNode);
  });
});

function manipulateParts(op, control) {
  const part = control.querySelector('[data-count]');

  if (op === '+') part.value = parseInt(part.value, 10) + 1;
  else if (part.value > 0) part.value = parseInt(part.value, 10) - 1;
}
