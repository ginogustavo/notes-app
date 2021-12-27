const getNotes = require("./notes");
const chalk = require("chalk");

const message = getNotes();
console.log(message);

console.log(chalk.green("Success!"));

const log = console.log;

log(chalk.blue("Hello") + " World " + chalk.red("!"));
log(chalk.red("one", "two", "three"));
log(chalk.magenta("Second " + chalk.underline.bgBlue("line") + "!"));
log(chalk.bold("testing Bold"));
log(
  chalk.green(
    "I'm a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes again"
  )
);

//ES2015 template literal
log(`
    CPU : ${chalk.red("90%")} 
    RAM : ${chalk.green("40%")} 
    DISK : ${chalk.yellow("70%")} 
`);

//ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${(ram.used / ram.total) * 100}%}
// DISK: {rgb(255,131,0) ${(disk.used / disk.total) * 100}% }
// `);

log(chalk.keyword("orange")("yay for orange colored text"));
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold Gray really cool"));

console.log(process.argv);
console.log(process.argv[2]);
