class Driver{

constructor(x , y){

    var Driver_options ={
       restitution:0.4,
       friction:1,
       density:1
        }

        this.body = Bodies.rectangle(x, y, 150 , 150 , Driver_options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("sprites/DriverHCR.png");
        World.add(world,this.body);

    }

    display(){

        var angle = this.body.angle;
        push ();
        translate(this.body.position.x , this.body.position.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.image , 0 , 0 , this.width , this.height);
        pop();
        

        }

}