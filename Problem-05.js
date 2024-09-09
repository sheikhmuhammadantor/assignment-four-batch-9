let payment = [1000, 2000, 2500];
let livingCost = 5000;

function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === 'number' && !isNaN(livingCost)) {
        let netEarn = 0;
        for (const a of arr) {
            a >= 3000 ? netEarn += (a - (a * 20 / 100)) : netEarn += a;
        }
        const totalSavings = netEarn - livingCost;
        return totalSavings < 0 ? 'earn more' : totalSavings;
    } else return 'Invalid Input';
}

console.log(monthlySavings(payment, livingCost));
