
function CalculateArea(width, height) {
    let Area = width * height;
    if (width == 0 || height == 0) {
        return 0; 
    return Area;
}

function calculateDiscountedPrice(price, discount) {
    let discountAmount = price * discount / 100;
    let finalPrice = price + discountAmount;
    return finalPrice;
}

function calculateSumAndProduct(a, b) {
    let sum = a + b;
    let product = a * b;

    return {
        sum: sum,
        product: product
    };
}

function calculateSum(a, b) {
    return a + b;
}

function calculateProduct(a, b) {
    return a * b;
}

function isValidAge(age) {
    if (age < 0) {
        return false; 
    } else if (age > 120) {
        return false;...
    }
    return true;
}

function greetUser(name) {
    let greeting = "Hello, " + name;
    console.log(greeting);

    let farewell = "Goodbye, " + name;
    console.log(farewell);
}

function greetAndFarewell(name) {
    let greeting = "Hello, " + name;
    console.log(greeting);

    let farewell = "Goodbye, " + name;
    console.log(farewell);
}

export default {
    CalculateArea,
    calculateDiscountedPrice,
    calculateSumAndProduct,
    calculateSum,
    calculateProduct,
    isValidAge,
    greetUser,
    greetAndFarewell
};
