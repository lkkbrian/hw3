createCanvas(500, 500);
background(255, 255, 255);
stroke(0, 0, 0);
strokeWeight(10);
for (var i = 0; i <= 250; i = i + 30) {
  line(0, i, 500, i);
}
for (var i = 0; i <= 500; i = i + 30) {
  line(i, 245, i, 500);
}
