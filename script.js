var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//cat head 1
ctx.beginPath();
ctx.arc(350, 250, 70, 0, 2 * Math.PI);
ctx.stroke();

//cat eyes 1
ctx.beginPath();
ctx.arc(320, 250, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(380, 250, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(330, 250, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(390, 250, 10, 0, 2 * Math.PI);
ctx.stroke();

//cat mouth 1
ctx.beginPath();
ctx.arc(350, 270, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(335, 280, 15, 6, 3);
ctx.stroke();
ctx.beginPath();
ctx.arc(365, 280, 15, 6.5, 3);
ctx.stroke();

/*ctx.beginPath();
ctx.arc(350, 270, 80, .9, 2);
ctx.stroke();

ctx.moveTo(340, 350);
ctx.lineTo(340, 470);
ctx.stroke();
ctx.moveTo(385, 342);
ctx.lineTo(385, 470);
ctx.stroke();

ctx.beginPath();
ctx.arc(360, 490, 28, 4, 5.95);
ctx.stroke();
ctx.beginPath();
ctx.arc(405, 490, 28, 4, 5.95);
ctx.stroke();
ctx.moveTo(385, 480);
ctx.lineTo(310, 480);
ctx.stroke();
ctx.moveTo(310, 480);
ctx.lineTo(290, 400);
ctx.stroke();
ctx.moveTo(290, 400);
ctx.lineTo(295, 340);
ctx.stroke();*/

//ears cat 1
ctx.moveTo(260, 150);
ctx.lineTo(285, 220);
ctx.stroke();

ctx.moveTo(440, 150);
ctx.lineTo(413, 220);
ctx.stroke();

ctx.moveTo(260, 150);
ctx.lineTo(330, 182);
ctx.stroke();

ctx.moveTo(440, 150);
ctx.lineTo(370, 182);
ctx.stroke();

//cat head 2
ctx.beginPath();
ctx.arc(550, 250, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(520, 250, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(580, 250, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(510, 250, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(570, 250, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 270, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(535, 280, 15, 6, 3);
ctx.stroke();
ctx.beginPath();
ctx.arc(565, 280, 15, 6.5, 3);
ctx.stroke();

//cat body 2

//ears cat 2
ctx.moveTo(450, 150);
ctx.lineTo(485, 220);
ctx.stroke();

ctx.moveTo(648, 150);
ctx.lineTo(613, 220);
ctx.stroke();

ctx.moveTo(450, 150);
ctx.lineTo(528, 182);
ctx.stroke();

ctx.moveTo(648, 150);
ctx.lineTo(560, 182);
ctx.stroke();

//heart
ctx.beginPath();
ctx.arc(345, 220, 120, 2.8, 5.8);
ctx.stroke();
ctx.beginPath();
ctx.arc(555, 220, 120, 9.9, 12.7);
ctx.stroke();

ctx.moveTo(229, 255);
ctx.lineTo(450, 500);
ctx.stroke();
ctx.moveTo(675, 235);
ctx.lineTo(450, 500);
ctx.stroke();
