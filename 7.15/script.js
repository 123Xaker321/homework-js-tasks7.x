let main_h1 = document.getElementById("main_h1");
let date_nowElement = document.getElementById("date_now");
let date_in_futureElement = document.getElementById("date_in_future");
let date_in_future = new Date(2024, 3, 13, 7, 43, 0, 0);
function validateTime(time){
    if(time < 10){
        time = `0${time}`;
    }
    return time
}
function calculateDate(date_in_future){
    let date = new Date();
    let dayForDate_nowElement = date.getDate()
    let monthForDate_nowElement = date.getMonth() + 1
    let dayForDate_in_futureElement = date_in_future.getDate()
    let monthForDate_in_futureElement = date_in_future.getMonth() + 1
    let ms = date_in_future - date;
    date_nowElement.innerHTML = `Дата наразі ${validateTime(dayForDate_nowElement)}.${validateTime(monthForDate_nowElement)}.${date.getFullYear()}`;
date_in_futureElement.innerHTML = `Кінець акції ${validateTime(dayForDate_in_futureElement)}.${validateTime(monthForDate_in_futureElement)}.${date_in_future.getFullYear()}`;
    if(ms <= 0){
        main_h1.innerHTML = "Акція закінчилась, але не сумуйте :)"
        clearInterval(myInterval);
    }
    else{
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((ms % (1000 * 60)) / 1000);
main_h1.innerHTML = `До акції залишилося ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`

    }
}
let myInterval = setInterval(() => calculateDate(date_in_future), 1000)