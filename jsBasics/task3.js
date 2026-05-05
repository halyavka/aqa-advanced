function checkOrder(available, ordered) {
    if (available < 0 || ordered < 0) {
        return "Invalid input: values cannot be negative";
    }

    if (ordered === 0) {
        return "Your order is empty";
    }

    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    }

    return "Your order is accepted";
}

console.log(checkOrder(10, 5));
console.log(checkOrder(10, 12));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, -3));
console.log(checkOrder(-5, 3));