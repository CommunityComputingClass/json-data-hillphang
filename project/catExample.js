
let catData; // Variable to store JSON data
let catFact = "Loading..."; // Default text before data loads


 
let contents = "";

let Button;
let textBox; 


function preload() {
  // Load JSON data before setup runs
  catData = loadJSON('https://catfact.ninja/fact');
  myFont = loadFont("Louis George Cafe.ttf")
}


function setup() {
  createCanvas(800, 300);
  Button = createButton("show");
  Button.position(50,25)
  Button.mousePressed(showText)
  background(230, 242, 255);
 
  
  console.log(catData.fact)
  catFact = catData.fact
  background("navy")
  textFont('Arial')
  fill ("white")
  textSize(14)
  
   
}

function draw(){
  

}

function showText() {
  text(catFact, 50,100)
}