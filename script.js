var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//cat head 1
ctx.beginPath();
ctx.arc(350, 150, 70, 0, 2 * Math.PI);
ctx.stroke();

//cat eyes 1
ctx.beginPath();
ctx.arc(320, 150, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(380, 150, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(330, 150, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(390, 150, 10, 0, 2 * Math.PI);
ctx.stroke();

//cat mouth 1
ctx.beginPath();
ctx.arc(350, 170, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(335, 180, 15, 6, 3);
ctx.stroke();
ctx.beginPath();
ctx.arc(365, 180, 15, 6.5, 3);
ctx.stroke();

//cat 1 body
ctx.beginPath();
ctx.arc(350, 270, 80, 1, 2);
ctx.stroke();

ctx.moveTo(340, 350);
ctx.lineTo(340, 470);
ctx.stroke();
ctx.moveTo(385, 342);
ctx.lineTo(385, 470);
ctx.stroke();

ctx.beginPath();
ctx.arc(350, 270, 80, 1, 2);
ctx.stroke();
//ears cat 1
ctx.moveTo(260, 50);
ctx.lineTo(285, 120);
ctx.stroke();

ctx.moveTo(440, 50);
ctx.lineTo(413, 120);
ctx.stroke();

ctx.moveTo(260, 50);
ctx.lineTo(330, 82);
ctx.stroke();

ctx.moveTo(440, 50);
ctx.lineTo(370, 82);
ctx.stroke();

//cat head 2
ctx.beginPath();
ctx.arc(550, 150, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(520, 150, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(580, 150, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(510, 150, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(570, 150, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 170, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(535, 180, 15, 6, 3);
ctx.stroke();
ctx.beginPath();
ctx.arc(565, 180, 15, 6.5, 3);
ctx.stroke();

//cat body 2
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//ears cat 2
ctx.moveTo(450, 50);
ctx.lineTo(485, 120);
ctx.stroke();

ctx.moveTo(648, 50);
ctx.lineTo(613, 120);
ctx.stroke();

ctx.moveTo(450, 50);
ctx.lineTo(528, 82);
ctx.stroke();

ctx.moveTo(648, 50);
ctx.lineTo(560, 82);
ctx.stroke();