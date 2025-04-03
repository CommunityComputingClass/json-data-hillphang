let names = ["apple", "apricot","avocado","banana","bell pepper", "bilberry","blackberry", "blackcurrant",]
let y = 50; 

function setup() {
  createCanvas(400, 400);
  
  background(179, 215, 255)
  fill("white")
  textSize(16)
  
  for(let n = 0; n<names.length; n++){
    text(names[n], 150, y);
    y += 50; 
  }    
}