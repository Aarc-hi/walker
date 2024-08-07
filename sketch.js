let collectionOfColors=["red","orange","green","blue","pink","yellow"]
let walkingTeam=[];
for(let t=0; t<collectionOfColors.length; t++){
  walkingTeam.push (new walker(200,200,5,collectionOfColors[t]));
}


function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(30)  
}

function draw() {
  for(let t=0; t<walkingTeam.length; t++){
walkingTeam[t].doOneStep();
  }
}