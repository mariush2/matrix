let size = 23;
let main = [];
let string_length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  for (var i = 0; i < windowWidth / size; i++) {
    let list = []
    let randomHeight = random(0, -800);
    let randomSpeed = random(2, 4);
    let randomColor = [100, 100, 100 - random(5, 20)]
    string_length = 10 + parseInt(random(1, 5));
    for (var j = 0; j < string_length; j++) {
      list[j] = new Item(j);
      list[j].x = i * size;
      list[j].y = randomHeight + j * size;
      list[j].speed = randomSpeed;
      if (j == string_length - 1) {
        list[j].color = [100, 60, 100];
      } else {
        list[j].color = randomColor;
      }
    }
    main[i] = list;
  }

}

function draw() {
  background(0);
  for (var i = 0; i < main.length; i++) {
    let current = main[i]
    for (var j = 0; j < current.length; j++) {
      current[j].render();
      if (current[j].y > height + size) {
        current[j].y = -size;
      } else {
        current[j].y += current[j].speed;
      }
      if (random(0, 1) < 0.01) {
        current[j].ch = randomChar();
      }
    }
  }
}

function Item(j) {
  this.y = j * size;
  this.ch = char(19984 + random(1, 100));
  if (j == string_length - 1) {
    this.last = true;
  } else {
    this.last = false;
  }
  this.render = function() {
    if (this.last) {
      textStyle(BOLD);
    } else {
      textStyle(NORMAL);
    }
    textSize(size);
    fill(this.color);
    text(this.ch, this.x, this.y);
  }
}

function randomChar() {
  return char(19984 + random(1, 100));
}
