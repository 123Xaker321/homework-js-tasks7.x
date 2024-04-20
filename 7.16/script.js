let root = document.getElementById("root");
let daysOfTheWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];
let monthsOfTheYear = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
let dateNow = new Date();
function getDaysInMonth(myDate) {
    return 32 - new Date(myDate.getFullYear(), myDate.getMonth(), 32).getDate();
}
function outputAllMonths(myDate) {
    root.innerHTML += `<div class="tableElement"><h2 id="${myDate.getMonth()}">${monthsOfTheYear[myDate.getMonth()]}</h2><table id="calendarTable${myDate.getMonth()}" class="calendarTable"></table></div>`
    let calendarTable = document.getElementById(`calendarTable${myDate.getMonth()}`);
    let daysOfTheWeekRow = "<tr>";
    let daysOfTheMonthRows = "";
    let weeksInTheMonth = Math.ceil(getDaysInMonth(myDate) / 7);
    let dayOfTheMonthNow = 1;
    for (let i = 0; i < daysOfTheWeek.length; i++) {
        daysOfTheWeekRow += `<td class="dayOfTheWeek${i} dayOfTheWeek">${daysOfTheWeek[i]}</td>`;
    }
    daysOfTheWeekRow += "</tr>"
    for (let i = 0; i < weeksInTheMonth; i++) {
        daysOfTheMonthRows += "<tr>";
        if (i == 4) {
            let daysInThisWeek = getDaysInMonth(myDate) - 28;
            for (let j = 0; j < daysInThisWeek; j++) {
                daysOfTheMonthRows += `<td id="${myDate.getMonth()}${dayOfTheMonthNow}">${dayOfTheMonthNow}</td>`;
                dayOfTheMonthNow++;
            }
        }
        else {
            for (let j = 0; j < 7; j++) {
                daysOfTheMonthRows += `<td id="${myDate.getMonth()}${dayOfTheMonthNow}">${dayOfTheMonthNow}</td>`
                dayOfTheMonthNow++;
            }
        }
        daysOfTheMonthRows += "</tr>";
    }

    calendarTable.innerHTML += daysOfTheWeekRow;
    calendarTable.innerHTML += daysOfTheMonthRows;

}
function actionsWithDateNow() {
    let monthNowElement = document.getElementById(dateNow.getMonth());
    monthNowElement.style.color = "red";
    monthNowElement.onclick = function(){ alert("Це поточний місяць") };
    let dayOfTheMonthNowElement = document.getElementById(`${dateNow.getMonth()}${dateNow.getDate()}`);
    dayOfTheMonthNowElement.style.color = "red";
    dayOfTheMonthNowElement.onclick = function () { alert('Це число сьогодні') };
}

for (let i = 1; i < 12; i++) {
    let thisDate = new Date(dateNow.getFullYear(), i);
    outputAllMonths(thisDate);
}
actionsWithDateNow()
let weekendElements5 = document.getElementsByClassName("dayOfTheWeek5");
let weekendElements6 = document.getElementsByClassName("dayOfTheWeek6");
for (let weekendElem5 of weekendElements5) {
    weekendElem5.style.color = "red";
    weekendElem5.onclick = function () { alert('Це вихідний день') };
}
for (let weekendElem6 of weekendElements6) {
    weekendElem6.style.color = "red";
    weekendElem6.onclick = function () { alert('Це вихідний день') };
}