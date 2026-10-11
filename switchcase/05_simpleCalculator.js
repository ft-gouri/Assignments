{
    const a = 10;
    const b = 5;
    const operation = '+';

    switch (operation) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        default:
            console.log('Unknown operation');
    }
}
