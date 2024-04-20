let route = [];
route.push("Індустриальна");
route.push("Тракторний завод");
route.push("ім. Масельского");
route.push("Армійська");
route.push("Палац спорту");
route.push("Турбоатом");
route.push("Завод ім. Малишева");
alert(`Шлях: ${route[0]} - ${route[route.length - 1]}`);
for(let i = 0; i < route.length; i++){
    alert(route[i]);
}

alert(`Шлях: ${route[route.length - 1]} - ${route[0]}`);
while(route.length > 0){
    alert(route.pop());
}