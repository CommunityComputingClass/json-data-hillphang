/* https://vimeo.com/144162102
JSON source (5:05) https://github.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json
Video referenced (9:05)"createP from DOM" https://vimeo.com/142698165 */

var data;

function preload() {
  data = loadJSON('fruits.json');
}

function setup() {
  createCanvas(400, 400);
  
  //load the array of data associated with the birds keyword     into the variable birds
  let fruits = data.fruits; 
  
    //go into the [0] value of the birds array and find the       family keyword. Print that as text to the screen. 
    fill(0);
    textSize(32);
    text(fruits[0], 100,100);
    
    //go into the [0] value of the birds array and find dthe       members keyword. Print that as text to the screen. 
    // let members = fruits[0].members;
    // textSize(14);
    // text(members[0],100,150);
  
  //loop through all the bird families in the data set. 
   fill("black");
   let textY = 200;
   for (var i = 0; i < fruits.length; i++) {
   text(fruits[i], 100, textY);
   textY = textY + 30;
  }
}