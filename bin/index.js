const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("          GARUDA          ");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "#ecf0f1",
 backgroundColor: "#c0392b"
};
const msgBox = boxen( greeting, boxenOptions );

console.info(msgBox);

// const yargs = require("yargs");

// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .argv;

// const greeting = `Hello, ${options.name}!`;

// console.log(greeting);