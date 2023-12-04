const fs = require("fs");
const inquirer = require("inquirer");

const generateReadMe = ({
  title,
  description,
  installation,
  usage,
  contributing,
  license,
  tests,
  github,
  email,
}) =>
  `# ${title} ReadMe

${renderLicenseBadge(license)}

# Description:
${description}

Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation:
${installation}

# Usage:
${usage}

# Contributing:
${contributing}

# License:
${license}

# Tests:
${tests}

# Questions:
For further questions, please contact at [github.com/${github}](https://github.com/${github}) or <a href = "mailto:${email}">${email}</a>.

`;

console.log(
  "Welcome to the README.md Generator! Please answer the following prompts below to generate a unique README for your project. Try to use full sentences and be descriptive as possible."
);

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project called?",
    },

    {
      type: "input",
      name: "description",
      message: "What is the function of your project?",
    },

    {
      type: "input",
      name: "installation",
      message: "How does a user install your project?",
    },

    {
      type: "input",
      name: "usage",
      message: "How do users use your project?",
    },

    {
      type: "input",
      name: "contributing",
      message: "How can others get involved or contribute to your project?",
    },

    {
      type: "list",
      choices: ["MIT", "GNU", "Mozilla", "Apache", "None"],
      name: "license",
      message: "Please choose the license for your project",
    },

    {
      type: "input",
      name: "tests",
      message:
        "What are some tests the user can try to ensure the program is running properly?",
    },

    {
      type: "input",
      name: "github",
      message:
        "Provide your Github username for users to reach out with additional questions.",
    },

    {
      type: "input",
      name: "email",
      message:
        "Provide your email for users to reach out with additional questions.",
    },
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);
    console.log(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("README.md successfully created!")
    );
  });

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License.](https://img.shields.io/badge/License-MIT-green)";
  } else if (license === "GNU") {
    return "![License.](https://img.shields.io/badge/License-GNU-green)";
  } else if (license === "Mozilla") {
    return "![License.](https://img.shields.io/badge/License-Mozilla-green)";
  } else if (license === "Apache") {
    return "![License.](https://img.shields.io/badge/License-Apache-green)";
  } else {
    return "";
  }
}
