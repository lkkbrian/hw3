function yourPatch(x, y) {
  fill(255, 192, 203);
  stroke(238);
  rect(x, y, 100, 100);
  
  for (var i = 20; i <= 20; i = i + 10) { 
  	var startX = 20;
  	var startY = i;
  	var endX = i;
  	var endY = 20;
    line(10, 0, 0, 10);
    line(20, 0, 0, 20);
    line(30, 0, 0, 30);
    line(40, 0, 0, 40);
    line(50, 0, 0, 50);
    line(60, 0, 0, 60);
    line(70, 0, 0, 70);
    line(80, 0, 0, 80);
    line(90, 0, 0, 90);
    line(100, 0, 0, 100);
    line(100, 10, 10, 100);
    line(100, 20, 20, 100);
    line(100, 30, 30, 100);
    line(100, 40, 40, 100);
    line(100, 50, 50, 100);
    line(100, 60, 60, 100);
    line(100, 70, 70, 100);
    line(100, 80, 80, 100);
    line(100, 90, 90, 100);
    line(100, 100, 100, 100);
}
	fill(255, 255, 255);
	noStroke();
	rect(10, 10, 10, 70);
	rect(10, 80, 80, 10);

}
background(255);
yourPatch(0, 0); 
  fill(255, 0, 0);
  stroke(0, 0, 0);
  quad(random(40), random(40), random(60), random(60), random(70), random(70), random(90), random(90));

function myPatch(x, y) {
  fill(255, 192, 203);
  stroke(238);
  rect(x, y, 100, 100);
  
  for (var i = 20; i <= 20; i = i + 10) { 
  	var startX = 20;
  	var startY = i;
  	var endX = i;
  	var endY = 20;
    line(350, 240, 350, 240);
    line(340, 240, 350, 250);
    line(330, 240, 350, 260);
    line(320, 240, 350, 270);
    line(310, 240, 350, 280);
    line(300, 240, 350, 290);
    line(290, 240, 350, 300);
    line(280, 240, 350, 310);
    line(270, 240, 350, 320);
    line(260, 240, 350, 330);
    line(250, 240, 350, 340);
    line(240, 240, 350, 350);
    line(240, 250, 340, 350);
    line(240, 260, 330, 350);
    line(240, 270, 320, 350);
    line(240, 280, 310, 350);
    line(240, 290, 300, 350);
    line(240, 300, 290, 350);
    line(240, 310, 280, 350);
    line(240, 320, 270, 350);
    line(240, 330, 260, 350);
    line(240, 340, 250, 350);
}
	fill(255, 255, 255);
	noStroke();
	rect(320, 250, 10, 70);
	rect(250, 320, 80, 10);
}
background(255);
myPatch(width-100, height-100); 
fill(255, 0, 0);
  stroke(0, 0, 0);
var x = 260
var y = 330
  quad(250, 270, random(x, y), random(x, y), random(x, y), random(x, y), 310, 330);
