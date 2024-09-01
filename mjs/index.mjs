// .js => por defecto utiliza CommonJS
// .cjs => para forzar CommonJS
// .mjs => para utilizar ES Modules

import { sum, rest, mult } from "./sum.mjs";

console.log(sum(1, 2));
console.log(rest(1, 2));
console.log(mult(1, 2));
