
// -- HEY LOOK!! They gave us a FUNCTION... SO YOU BETTER USE IT *HINT HINT* 
function generateMarkdown(readmeInfo) {
  return `
# ${readmeInfo.title}

${repoBadge}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

- ${bioPic}
- ${email}
` 

}


// -- Here we are making our FUNCTION available outside (EXPORTING) of this file -- //
module.exports = generateMarkdown;
// -- NOTICE: that we are adding this function to the 'module.exports' OBJECT -- //

