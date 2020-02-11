class Ground {

constructor(x , y, width, height){
 var ground_options ={
     isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/HCRG2.png");
        World.add(world,this.body);

    }

display(){

    push ();
this.body.position.x -=2;

imageMode(CENTER);
image(this.image , this.body.position.x , this.body.position.y , this.width , this.height);
pop ();

}

}
