let size = 0;
let main = [];
let string_length;
let charSet = []
let xSet = [size, -size, size * 2, -size * 2];

for (let k = 0; k < 100; k++) {
  charSet[k] = 19984 + k;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  size = round(width / 17, 1);
  console.log(size);
  frameRate(40);

  init();
  //init();
}

function draw() {
  background(0);
  for (var i = 0; i < main.length; i++) {
    let current = main[i];
    for (var j = 0; j < current.length; j++) {
      if (current[j].x > width + size) {
        current[j].x = -size;
      } else if (current[j].x < -size) {
        current[j].x = width + size;
      }

      if (current[j].y > height + size) {
        current[j].y = -size;
        current[j].x += current[j].speed_x;
      } else {
        current[j].y += map(mouseX, 0, width, 1, current[j].speed_y);
      }
      if (random(0, 1) < 0.001) {
        current[j].ch = char(charSet[j]);
      }
      current[j].render();
    }
  }
}

function Item(j) {
  this.y = j * size;
  this.ch = char(19984 + random(1, 100));
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

function init() {
  for (var i = 0; i < windowWidth / size; i++) {
    let list = []
    let randomHeight = random(0, -800);
    let randomSpeed1 = random(3, 5);
    let randomX = round(random(0, 3), 1);
    string_length = 10 + parseInt(random(1, 5));
    for (var j = 0; j < string_length; j++) {
      list[j] = new Item(j);
      list[j].x = i * size;
      list[j].y = randomHeight + j * size;
      list[j].speed_y = randomSpeed1;
      list[j].speed_x = xSet[randomX];
      if (j == string_length - 1) {
        list[j].color = [100, 60, 100];
        list[j].last = true;
      } else {
        list[j].color = [100, 100, 100 - random(5, 20)];
      }
    }
    main[i] = list;
  }
}
