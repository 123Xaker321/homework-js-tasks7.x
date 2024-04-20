let converter = {
    courseUAHUSD: 0.026,
    courseUSDUAH: 38.81,
    uah: "₴",
    usd: "$"
}
converter.convertMoney = function () {
    let output;
    let input = Number(prompt('Введіть кількість грошей'));
    let currency = prompt("Оберіть валюту яка конвертується UAH або USD");
    if (currency == "UAH") {
        output = `${input * converter.courseUAHUSD}${converter.usd}`;
    }
    else if (currency == "USD") {
        output = `${input * converter.courseUSDUAH}${converter.uah}`;
    }
    else {
        alert("Неправильні вхідні дані. Введіть валюту - UAH або USD");
        return;
    }
    alert(`Ваші гроші успішно конвертовані в ${output}`);
}
converter.setCourse = function () {
    let newCourse = prompt("Введіть новий курс");
    let courseType = prompt("Який курс змінити - UAHUSD або USDUAH?");
    if (courseType == "UAHUSD") {
        converter.courseUAHUSD = newCourse;
    }
    else if (courseType == "USDUAH") {
        converter.courseUSDUAH = newCourse;
    }
    else {
        alert("Неправильні вхідні дані. Введіть курс - UAHUSD або USDUAH");
        return;
    }
    alert(`Новий курс заданий, ${newCourse}`);
}
converter.show = function () {
    alert(`${this.courseUAHUSD} UAH/USD`);
    alert(`${this.courseUSDUAH} USD/UAH`);
}