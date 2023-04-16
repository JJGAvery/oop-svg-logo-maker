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
          this.svg.circle(80).move(150, 100).fill(this.shapeColor);
          break;

        case "square":
          this.svg.rect(120, 120).move(90, 40).fill(this.shapeColor);
          break;

        default:
          this.svg.polygon("150, 18 244, 182 56, 182").fill(this.shapeColor);
          break;
      }
      return this.svg;
    }
  }
  
  module.exports = { Shape };
  