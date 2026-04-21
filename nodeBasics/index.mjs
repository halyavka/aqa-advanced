import chalk from "chalk";

const subjects = ["Розробник", "Тестувальник", "Кіт", "Продакт-менеджер"];
const verbs = ["задеплоїв", "зламав", "протестував", "проігнорував"];
const objects = ["продакшн", "документацію", "пул реквест", "баг у п'ятницю"];

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

const phrase = `${rand(subjects)} ${rand(verbs)} ${rand(objects)}`;
console.log(chalk.red(phrase));