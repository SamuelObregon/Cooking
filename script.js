// TODO: Change these values to your own images & colors!
var BACKGROUND_IMG = "salmon.png";
var HERO_IMG = "images/Megaman.png";
var FINISH_IMG = "images/finish.png";
var TEXT_COLOR = "purple";

// Stores the hero sprite position.
//var salmon = {
//  speed: 50, // Movement speed in pixels per second.
// x: 0,
// y: 0
//};
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
  //  var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
  //  if (hero.x > finish.x && hero.x < finish.x + finish.width &&
  //      hero.y > finish.y && hero.y < finish.y + finish.height)
    //    if (false) {
     //       wins++;
       //     canvas.fillText("YOU WON!", 50, 100);
         //   reset();
        }
    var myElement = document.querySelector("knife"); 
    var position = getPosition(myElement);
    alert("The image is located at: " + position.x + ", " + position.y);
    
