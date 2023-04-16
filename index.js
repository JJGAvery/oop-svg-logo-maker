const SVG = require('svg.js');
const inquirer = require('inquirer');
const {Shape} = require('./library/shapes.js');
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

  .then((answers) => {
    const { textType, colorTextInput, shapeInput, shapeColor } = answers;
    const shape = new Shape(textType, colorTextInput, shapeInput, shapeColor);
  
    return fs.writeFile("logo.svg", shape.drawSvg().svg(), (err) => {
      if (err) {
        console.log(err);
      }
    });
  })
  .then(() => {
    console.log("Created your logo.svg file!");
  })

