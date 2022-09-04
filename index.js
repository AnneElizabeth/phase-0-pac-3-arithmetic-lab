function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function increment (n) {
    return (n += 1);
}

function decrement (n) {
    return (n -= 1);
}

function makeInt (string) {
    let nowANumber = parseInt(string, 10);
    return nowANumber;
}

function preserveDecimal (n) {
    let keepDecimals = parseFloat(n);
    return keepDecimals;
}


