class Paper {
    constructor(x, y, r) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.0,
          'density':1.2
      }
      
      this.x = x;
      this.y =y;
      this.r = r;
      this.image=loadImage("paper.png");
      console.log(this.image);
      
      //this.r = 20;
      this.body = Bodies.circle(x, y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      //ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  