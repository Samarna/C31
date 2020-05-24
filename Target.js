class Box {
    constructor(x, y) {
      var options = {
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height,options);

      this.width = 10;
      this.height = 10;
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("lightgrey");
      rect(0,0, 10, 10);
      pop();
    }
  };
