class Slingshot {
  constructor(x, y, body) {
    const options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.02,
      length: 40
    };
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyB = null;
  }

  attach(bird) {
    this.sling.bodyB = bird;
  }

  show() {
    if (this.sling.bodyB) {
      stroke(150);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }
}
