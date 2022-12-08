import * as controller from "./controller.js";
import chalk from "chalk";


const sum1 = controller.suma(1, 2);
const sum2 = controller.suma(4, 5);
const multi = controller.multiplicar(sum1, sum2);

console.log(chalk.green(multi));