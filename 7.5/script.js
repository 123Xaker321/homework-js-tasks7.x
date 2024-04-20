let room = new Object();
room.roomName = "kitchen";
room.roomWidth = 2;
room.roomLength = 5;
room.roomHeight = 3;
room.windowsCount = 3;
room.doorsCount = 2;
room.roomColor = "white";
room.show = function(){
    alert(`Назва кімнати: ${room.roomName}, широта кімнати: ${room.roomWidth}m, протяжність кімнати: ${room.roomLength}m, висота кімнати: ${room.roomHeight}m, кількість вікон кімнати: ${room.windowsCount}, кількість дверей кімнати: ${room.doorsCount}, колір стін кімнати: ${room.roomColor}.`)
}
room.area = function(){
    alert(`Площа кімнати: ${room.roomWidth * room.roomLength * room.roomHeight}m^3`)
}