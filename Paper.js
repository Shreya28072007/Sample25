class Paper{

    constructor(x,y,radius){
    
     var options={
         isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2    
    }
    this.radius=radius;
    this.body=Bodies.circle(x,y,this.radius/2,options);
    this.image = loadImage("sprites/paper.png");
  
    World.add(world,this.body);
    
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 10, 5, this.radius, this.radius);
        pop();
    }
    
    }
