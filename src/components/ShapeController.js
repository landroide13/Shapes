import { Component } from "react";
import CircleShape from "./CircleShapes";
import './ShapeControl.css';

class ShapeController extends Component {
  state = {
    shape: "",
    size: "",
    background: "",
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  getNumber = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  };

  returnNum = (num) => {
    return num;
  };

  shuffle = (arr) => {
    const inx = this.getNumber(0, arr.length);
    return arr[inx];
  };

  render() {
    const sizes = [0.1, 0.5, 1, 1.8, 2, 4, 6, 8, 10];

    // setInterval(this.shuffle, 5000)

    const shape = [5, 15, 50];

    const colors = [
      "#77b3d1",
      "#E94F37",
      "#1C89BF",
      "#A1D363",
      "#85FFC7",
      "#297373",
      "#FF8552",
      "#A40E4C",
      "#85AFC0",
      "#296573",
      "#AA8552",
      "#CC0E4C",
      "#567187",
      "#c6c976",
      "#967c64",
      "#e497ed",
      "#d24cff",
      "#e2ceb1",
      "#cc999e",
      "#97bf9a",
    ];

    return (
      <div id="grid">
        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />

        <CircleShape
          shape={this.shuffle(shape)}
          size={this.shuffle(sizes)}
          back={this.shuffle(colors)}
        />
      </div>
    );
  }
}
 
export default ShapeController;










