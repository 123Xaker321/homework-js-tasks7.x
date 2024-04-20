let DayOfWeek= ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"]
let n = new Date;
let month = n.getMonth() + 1;
if(month < 10){
    month = `0${month}`;
}
alert(`Сьогодні ${n.getDate()}.${month}.${n.getFullYear()}, день тижня - ${DayOfWeek[n.getDay()]}, рік - ${n.getFullYear()}, місяць - ${n.getMonth() + 1}, день - ${n.getDate()}`)