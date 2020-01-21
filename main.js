const { Engine, World, Bodies, MouseConstraint, Mouse, Constraing } = Matter;
let ground;
const boxes = [];
let bird;
let word, engine;
let mConstrain;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;

function preload() {
  dotImg = loadImage("images/dot.png");
  botImg = loadImage("images/equals.png");
  bkgImg = loadImage("images/skyBackground.png");
}

function setup() {
  const canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  bird = new Bird(150, 300, 25);
  slingshot = new Slingshot(150, 300, bird.body);
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(450, 300 - i * 84, 84, 100);
  }
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
    element: canvas.elt
  };
  mConstrain = MouseConstraint.create(engine, options);
  World.add(world, mConstrain);
}

function draw() {
  background(bkgImg);
  Engine.update(engine);
  ground.show();
  for (box of boxes) {
    box.show();
  }
  slingshot.show();
  bird.show();
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function keyPressed() {
  if (key == " ") {
    World.remove(world, bird.body);
    slingshot.attatch(bird);
    bird = new Bird(150, 300, 25);
  }
}
