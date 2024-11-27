const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

const sayHello = (name) => {
    return `Hello, ${name}!`;
};

const sayGoodbye = (name) => {
    return `Goodbye, ${name}!`;
};

const sayThanks = (name) => {
    return `Thank you, ${name}!`;
};

// Export all functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    sayHello,
    sayGoodbye,
    sayThanks
};
