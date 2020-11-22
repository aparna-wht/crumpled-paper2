class Dustbin{
    constructor(x, y) {
      
      this.x = x;
      this.y = y;
      this.width = 200;
      this.height = 213;
      this.thickness = 20;
      this.angle = 0;
	  
	  this.image=loadImage("dustbingreen.png");

      this.bottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
      this.left = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
      Matter.Body.setAngle(this.left,this.angle);
      this.right = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});

     
      //Matter.Body.setAngle(this.right,-1*this.angle);
     

      World.add(world,this.bottom);
      World.add(world,this.right);
      World.add(world,this.left);

  
     
    }
    display(){
      var posbottom =this.bottom.position;
      var posleft = this.left.position;
      var posright = this.right.position;

      //var angle = this.body.angle;
      push()
			translate(posleft.x, posleft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			//rotate(this.angle)
			//rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posright.x, posright.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			//rotate(-1*this.angle)
			//rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posbottom.x, posbottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image,0,-this.height/2,this.width,this.height);
			//rect(0,0,this.width, this.thickness);
			pop()
    }
  };