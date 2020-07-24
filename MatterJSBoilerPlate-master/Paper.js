class Paper {
    constructor(x,y) {
      var options = {

          'isStatic': false,
          'restitution':0.8,
          'friction':0.8,
          'density':0.8

      };
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 55;
      this.height = 55;
      this.image = loadImage("paperball.png")
      
     World.add(world, this.body);
    }

    display(){

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      stroke("black");
      strokeWeight(3);
      fill("white");
      ellipse(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();

    }
  };