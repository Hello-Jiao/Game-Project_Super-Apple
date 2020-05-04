/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	//rect(0, 432, 1024, 144); //draw some green ground
    rect(0,432,164,144,0,50,0,0);
    rect(272,432,752,144,50,0,0,0,0);
	//1. a cloud in the sky
	//... add your code here
    fill(255,255,255)
    rect(200,75,199,50,25,25,25,25);
    ellipse(270,82,72,72);
    ellipse(318,86,72,72);

	//noStroke();
	//fill(255);
	//text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
    fill(125,139,124);
    triangle(647,153,486,432,809,432);
    fill(156,165,155);
    triangle(750,108,456,432,994,432);
    fill(100,124,88);
    triangle(755,217,627,432,914,432);
    fill(120,147,107);
    triangle(645,271,493,432,735,432);
    
	//noStroke();
	//fill(255);
	//text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    fill(137,103,27);
    rect(817,345,19,87);
    fill(188,222,111);
    triangle(827,182,767,376,827,376);
    fill(138,195,61);
    triangle(827,182,827,376,886,376);
    
    fill(137,103,27);
    rect(870,373,13,59);
    fill(188,222,111);
    triangle(876,263,876,395,836,395);
    fill(138,195,61);
    triangle(876,263,916,395,876,395);
    

	//noStroke();
	//fill(255);
	//text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    fill(168,167,186);
    triangle(186,471,168,576,204,576);
    fill(223,222,240);
    triangle(186,471,168,576,186,576);
    fill(168,167,186);
    triangle(218,471,200,576,236,576);
    fill(223,222,240);
    triangle(218,471,200,576,218,576);
    fill(168,167,186);
    triangle(250,471,232,576,268,576);
    fill(223,222,240);
    triangle(250,471,232,576,250,576);

	//noStroke();
	//fill(255);
	//text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    fill(186,51,51);
    ellipse(414,404,31,39);
    ellipse(430,404,31,39);
    stroke(88,70,70);
    strokeWeight(3);
    line(430,374,422,393);

	//noStroke();
	//fill(255);
	//text("collectable item", 400, 400);
}
