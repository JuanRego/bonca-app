export function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function randomColor() {
  let r = 100 + randomInteger(40);
  let g = 20 + randomInteger(40);
  let b = 20 + randomInteger(40);

  let hr = r.toString(16).padStart(2, "0");
  let hg = g.toString(16).padStart(2, "0");
  let hb = b.toString(16).padStart(2, "0");

  return "#" + hr + hg + hb;
}

export function randomColorPale() {
  let randomColor = randomInteger(2);

  let r = randomInteger(40);
  let g = randomInteger(40);
  let b = randomInteger(90);

  let array = [r, g, b];

  array[randomColor] = array[randomColor] + 130;

  let newR = array[0];
  let newG = array[1];
  let newB = array[2];

  let hr = newR.toString(16).padStart(2, "0");
  let hg = newG.toString(16).padStart(2, "0");
  let hb = newB.toString(16).padStart(2, "0");

  return "#" + hr + hg + hb;
}
