import {sum, pi} from "./math";

console.log("2π = " + sum(pi, pi));

function expand(x, ...y){
    return x + y.length;
}

let local = expand(5, 'e', 1.1);

console.log(`local variable ${local}`);