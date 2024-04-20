var users = ["Артем", "Марта", "Сергій", "Борис", "Ольга", "Віктор"];
function check() {
      let k = 0;      
      let n = prompt("Уведіть ім'я для перевірки:", "");
      for (let i = 0; i < users.length; i++){
        if (users[i] == n){
          k = 1; 
          break;
        }
      }
      if (k == 1){
       alert("Такий користувач зареєстрований")
      }
      else {
        alert("Такий користувач не зареєстрований")
      }
    }
    function add(){
        users.push(prompt("Уведіть ім'я нового користувача:", ""));
    }
    function show(){
        let usersString = "";
        for(let i = 0; i < users.length; i++){
            usersString += `${users[i]} `;
        }
        alert(usersString)
    }
    function showSorted(){
      let usersString = "";
      users.sort();
        for(let i = 0; i < users.length; i++){
            usersString += `${users[i]} `;
        }
        alert(usersString)
    }