class Line {
constructor(bodyA,bodyB){
var xyz={
 bodyA:bodyA,
 bodyB:bodyB,
 length:10,
 stiffness:0.4
}  

 this.chain=Constraint.create(xyz)
 World.add(world,this.chain)
}
display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}