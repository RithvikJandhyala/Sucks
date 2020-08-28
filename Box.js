class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.01,
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }

      score(){
        if(this.visibility<0 && this.visibility>-255){
          score++;
        }
      }

      display(){
       
        if(this.body.speed < 8){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("red");
          rect(0, 0, this.width, this.height);
          pop();
        }
        else{
       
        push();
        this.visibility = this.visibility-5
        tint(255,this.visibility);
        
        //rect(0, 0, this.width, this.height);
        pop();
        World.remove(world,this.body);
        }
      }

}