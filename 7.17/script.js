let dayNow = 2;
let days = ["Пн", "Вт", "Ср", "Чт", "Пт"];
let timetable = {
    "09.00-10.30": ["Мат", "Фіз", "Хім", "Фіз-ра", "Біол"],
    "11.00-12.30": ["Engl", "Інф", "Осн Здор", "Мист", "Труд"],
    "13.00-14.30": ["Engl", "Мист", "Фіз-ра", "Біол", "Мат"]
};

function printTimetable() {
    let w = window.open('', 'timetable', 'width=400, height=300');
    w.document.write("<div id='root'></div>");
    let root = w.document.getElementById("root");
    root.innerHTML += "<table id='timetableTable'></table>";
    let timetableTable = w.document.getElementById("timetableTable");
    timetableTable.innerHTML += `<tr id='days'><td>Дні тижня</td></tr>`
    let trDays = w.document.getElementById("days");
    for (let i = 0; i < days.length; i++) {
        if (i == dayNow) {
            trDays.innerHTML += `<td style="color: red;">${days[i]}</td>`
        }
        else {
            trDays.innerHTML += `<td>${days[i]}</td>`
        }
    }
    for (time in timetable) {
        timetableTable.innerHTML += `<tr id='${time}'></tr>`;
        let trNow = w.document.getElementById(`${time}`);
        let timetableSubjects = timetable[time];
        trNow.innerHTML += `<td>${time}</td>`
        for (let i = 0; i < timetableSubjects.length; i++) {
            trNow.innerHTML += `<td>${timetableSubjects[i]}</td>`;
        }

    }
    root.innerHTML += '<button onclick="window.close()">Закрити розклад</button>';
    root.innerHTML += '<button onclick="window.print()">Роздрукувати</button>';
}