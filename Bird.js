class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.ss = loadImage("sprites/smoke.png")
    this.tj = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
    var position = [ this.body.position.x,this.body.position.y]
    this.tj.push(position)
    }
    for(var i = 0; i<this.tj.length; i++){
    image(this.ss,this.tj[i][0], this.tj[i][1])
    }
  }
}
