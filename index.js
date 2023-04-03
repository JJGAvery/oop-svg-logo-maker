const SVG = require('svg.js');
const inquirer = require('inquirer');
const Circle = require('./library/shapes.js');
const Square = require('./library/shapes.js');
const Triangle = require('./library/shapes.js');
const fs = require('fs');

inquirer.prompt([
    {
      type: 'input',
      name: 'textType',
      message: 'What are 3 letters you want to have in your logo?',
    },
    {
        type: 'input',
        name: 'colorTextInput',
        message: 'What is the color you want for the text in the logo?(color name or hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shapeInput',
        message: 'What shape do you want your logo to have?',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be?(color name or hexadecimal number',
    },
])

.then(({ textType, colorTextInput, shapeInput, shapeColor }) => {
    let shape;
    switch (shapeInput) {
      case "circle":
        shape = new Circle();
        break;

      case "square":
        shape = new Square();
        break;

      default:
        shape = new Triangle();
        break;
    }
    const svg = new SVG();
    svg.setText(textType, colorTextInput);
    svg.setShape(shape);
    svg.setShapeColor(shapeColor);
    return writeFile("logo.svg", svg.render());
  })
  .then(() => {
    console.log("Created your logo.svg file!");
  })

