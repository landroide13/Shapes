import { Component } from "react";
import CircleShape from "./CircleShapes";
import './ShapeControl.css';

class ShapeController extends Component {
  state = {
    shape: 50,
    size: 100,
    background: "#97bf9a",
  };

  componentDidMount() {
    setInterval(this.setShape, 2000);
    setInterval(this.setSize, 2000);
  }

  getNumber = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  };

  setShape = () => {
    const shape = this.getNumber(1, 50);
    this.setState({ shape });
  }

  setSize = () => {
    const size = this.getNumber(0.1, 10);
    this.setState({ size });
  }

  shuffle = (arr) => {
    const inx = this.getNumber(0, arr.length);
    return arr[inx];
  };

  render() {

    const { shape, size } = this.state

    // const sizes = [0.1, 0.5, 1, 1.8, 2, 4, 6, 8, 10];

    // const shape = [5, 15, 50];

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
        <CircleShape shape={shape} size={size} back={this.shuffle(colors)} />
      </div>
    );
  }
}
 
export default ShapeController;










