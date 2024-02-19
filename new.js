

function monthlySavings(allPayments, livingCost) {
//1
    let totalIncome = 0;

    for (let payment of allPayments) {
        totalIncome += payment;
    }
//
    let tax = 0;
    for (let payment of allPayments) {
        if (payment > 3000) {
            tax += (payment - 3000) * 0.2;
        }
    }

    let netIncome = totalIncome - tax;

    let savings = netIncome - livingCost;

    if (savings >= 0) {
        return savings; 
    } else {
        return "earn more"; 
    }
}

// Test cases
console.log(monthlySavings([1000, 2000,2500], 5000)); // Output: "Invalid input"
