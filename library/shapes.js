const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const SVG = require('svg.js')(window)
const document = window.document

class Shape {
    constructor(textType, colorTextInput, shapeInput, shapeColor) {
      this.shapeColor = shapeColor;
      this.textType = textType;
      this.colorTextInput = colorTextInput;
      this.shapeInput = shapeInput;
      this.svg = SVG(document.documentElement);
    }
    drawSvg() {
      switch (this.shapeInput) {
        case "circle":
          this.svg.circle(80).move(150, 0).fill(this.shapeColor);
          this.svg.text(this.textType).center(190, 25).fill(this.colorTextInput);
          break;

        case "square":
          this.svg.rect(120, 120).move(90, 40).fill(this.shapeColor);
          this.svg.text(this.textType).center(150, 80).fill(this.colorTextInput);
          break;

        default:
          this.svg.polygon("150, 18 244, 182 56, 182").fill(this.shapeColor);
          this.svg.text(this.textType).center(150, 80).fill(this.colorTextInput);
          break;
      }
      return this.svg;
    }
  }
  
  module.exports = { Shape };
  