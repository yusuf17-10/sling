class Ball {
  constructor(x,y) {
    var options ={
        restitution:0.01,
        density:1
       }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image = loadImage("assets/paper.png");

    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
    
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,10,10,30,30);
    pop();
  }
}
