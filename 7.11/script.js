function birthDateToAge(b){
    let output = "";
    let n = new Date();
    b = new Date(b);
    age = n.getFullYear() - b.getFullYear();
    months = 12 + (b.getMonth() - n.getMonth());
    let n_2000 = n.setFullYear(2000);
    let b_2000 = b.setFullYear(2000);
    if(n_2000 > b_2000){
        age -= 1;
    }
    else{
    months -= 12;
    }
let ageLetters = age.toString().split("");
if(age < 20 && age > 12)
output += `Вам ${age} років`
else if(ageLetters[ageLetters.length - 1] == 1)
output += `Вам ${age} рік`
else if(ageLetters[ageLetters.length - 1] < 5)
output += `Вам ${age} роки`
else
output += `Вам ${age} років`
if(months == 1)
output += ` і ${months} місяць`;
else if(months > 1 && months < 5)
output += ` і ${months} місяці`;
else
output += ` і ${months} місяців`
return output;
}
alert(birthDateToAge(prompt("Введіть вашу дату народження у форматі 2010-01-26")))