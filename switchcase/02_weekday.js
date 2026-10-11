{
    const day = 6;

    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('weekday');
            break;
        case 6:
        case 7:
            console.log('weekend');
            break;
        default:
            console.log('Invalid day');
    }
}
