const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#FFF",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
},

const :  new Phaser.Game(config),

let player;
let ground;
let clouds;

function preload(){
    this.load.image("ground", "assets/ground.png");
    this.load.image("cloud", "assets/cloud.png"); 
this.load.spritesheet("dino","assets/dino-idle.png",{frameWidth: 88, framHeight:94});}

function create() {
    this.add.image(100,300,"ground")
    this.add.image(300,130,"cloud")
    this.add.image(500,130,"cloud")
    this.add.image(100,130,"cloud")
    this.physics.add.sprite(200,200,"dino").setOrigin(0);
    this.clouds=this.add.group();
    this.clouds=this.clouds.addMultiple(
        [this.add.image(300,130,"cloud"),
        this.add.image(500,130,"cloud"),
        this.add.image(100,130,"cloud")]
    );
}
function update() {

}
