class  Ground{

    constructor(x,y,width,height){

    this.body=Bodies.rectangle(x,y,width,height,{isStatix:true})
    World.add(Word,this.body)
        
    this.width=width;
    this.height=height;
}


display(){
    push()
    fill("yellow")
    rectMode(CENTER)
    rec(this.body.position.x,this.body.position,y,this.width,this,this.height)
    pop ()
}


}