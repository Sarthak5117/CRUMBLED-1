class Dustbin{


    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x,y,width,height,{density:8,fricition:5})
        World.add(Word,this.body)
            
        this.width=width;
        this.height=height;
    }

    
    display(){
        push()
        fill("white")
        rectMode(CENTER)
        rec(this.body.position.x,this.body.position,y,this.width,this,this.height)
        pop ()
    }
}