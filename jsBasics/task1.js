const width = 12
const height = 15

// 1. Function Declaration
function getArea(width, height) {
    return width * height;
}

console.log("Function Declaration:", getArea(width, height));

// 2. Function Expression
const getArea2 = function(width, height) {
    return width * height;
};

console.log("Function Expression:", getArea2(width, height));

// 3. Arrow Function
const getArea3 = (width, height) => width * height;

console.log("Arrow Function:", getArea3(width, height));