import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, color);
    this._motor = motor;
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._color);
  }
}
