let number = 9;

console.log("Таблиця множення (for):");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

console.log("Таблиця множення (while):");
let j = 1;
while (j <= 10) {
    console.log(`${number} * ${j} = ${number * j}`);
    j++;
}