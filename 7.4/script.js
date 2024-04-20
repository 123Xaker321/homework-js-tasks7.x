let users = { 'artem': 'password1', 'olga': 'password2' };
function check(n1, n2) {
    let exist1 = false;
    let exist2 = false;
    for (let key in users) {
        if (key == n1) {
            exist1 = true;
        }
        if(users[key] == n2){
            exist2 = true;
        }
    } 
    if(!exist2){
        alert("Такого паролю немає в базі даних")
        return true;
    }
    else {
        alert("Такий користувач зареєстрований")
        return false;
    }
}
function show(){
    for (var key in users){
        document.write(key + ': ' + users[key] + '<br />');
       }
}
function add(){
    let n1 = prompt("Уведіть логін:", "");
    let n2 = prompt("Вигадайте надійний пароль:", "");
    if(check(n1, n2)){
    users[n1] = n2;
    }
}