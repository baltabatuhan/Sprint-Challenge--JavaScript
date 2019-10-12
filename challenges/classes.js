// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboid {
  constructor(att) {
    this.lenght = att.lenght;
    this.width = att.width;
    this.height = att.height;
  }
  volume() {
    return this.lenght * this.width * this.height;
  }
  surface() {
    return (
      2 *
      (this.lenght * this.width +
        this.lenght * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends Cuboid {
  constructor(att) {
    super(att);
  }
  volume() {
    return Math.pow(this.lenght, 3);
  }
  surface() {
    return 6 * this.height * this.lenght;
  }
}
const cube = new CubeMaker({
  lenght: 3,
  width: 3,
  height: 3
});
const cuboid1 = new Cuboid({
  lenght: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.volume() + " cm3");
console.log(cube.surface() + " cm2");
