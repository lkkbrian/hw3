function setup() { 
  createCanvas(500, 500);
} 
setup();

for (var i = 0; i <= 500; i = i + 15) {
		line(250, 250, random(500), random(500))
    line(0, 55, random(500), random(500))
    line(250, 500, random(500), random(500))
}
