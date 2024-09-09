let ticketSale = 2;

function calculateMoney(ticketSale) {
    if (ticketSale >= 0 && (typeof ticketSale === 'number')) {
        const totalCost = 500 + (8 * 50);
        return (ticketSale * 120) - totalCost;
    } else {
        return 'Invalid Number';
    }
}

console.log(calculateMoney(ticketSale));
