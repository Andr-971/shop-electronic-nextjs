const currentTime = new Date();
const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
];
const deys = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
];
const dey = [
    "Вс",
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
];
export const currentHous = currentTime.getHours(); // Текущий час
export const currentMinutes = currentTime.getMinutes(); // Текущая минута
export const currentSeconds = currentTime.getSeconds(); // Текущая секунда
export const currentMilliseconds = currentTime.getMilliseconds(); // Текущая милисекунда
export const currentDay = dey[currentTime.getDay()]; // Текущий день недели
export const currentData = currentTime.getDate(); // Текущее число
export const currentMonth = months[currentTime.getMonth()]; // Текщий месяц
export const currentYear = currentTime.getFullYear(); // Текущий год

export function futureHours(n) {
    // Какой последующий час
    return currentTime.getHours() + n;
}
export function futureDay(n) {
    // Какой последующий день недели
    if (currentTime.getDay() + n > 6) {
        n = (currentTime.getDay() + n) % 7;
        return dey[n];
    }
    return dey[currentTime.getDay() + n];
}
export function futureData(n) {
    // Какой последующий день
    let curr = new Date();
    let date = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
    if (currentTime.getDate() + n > date.getDate()) {
        console.log(n);
        n = (currentTime.getDate() + n) % date.getDate();
        return n;
    }
    return currentTime.getDate() + n;
}
export function futureMonth(n) {
    // Какой последующий месяц
    return months[currentTime.getMonth() + n];
}
export function futureYear(n) {
    // Какой последующий год
    return currentTime.getFullYear() + n;
}
