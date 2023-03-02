const controls = document.querySelectorAll('[data-control]');
const stats = document.querySelectorAll('[data-stats]');

const parts = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

controls.forEach((element) => {
  element.addEventListener('click', () => {
    if (manipulateParts(element.dataset.control, element.parentNode)) updateStats(element.dataset.part);
  });
});

function manipulateParts(op, control) {
  const part = control.querySelector('[data-count]');

  if (op === '+') part.value = parseInt(part.value, 10) + 1;
  else if (part.value > 0) part.value = parseInt(part.value, 10) - 1;
  else return false;

  return true;
}

function updateStats(part) {
  stats.forEach((stat) => {
   stat.textContent = parseInt(stat.textContent, 10) + parts[part][stat.dataset.stats];
  });
}
