const plus = (b) => {
    let x = 1;
    return y => {
        x++
        return x+y+b;
    }
}

const add5 = plus(5);

console.log(add5(1));