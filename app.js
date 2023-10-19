const pole1 = document.getElementById('name2')
const pole2 = document.getElementById('age2')
const button = document.getElementById('button')
const resultat = document.getElementById('result')
const resultat2 = document.getElementById('result2')


button.onclick = function(){
    if(isNaN(pole1.value)) {
        sum = `Привет ${pole1.value}, а меня зовут Альберт, у тебя красивое имя!`
        resultat.textContent = sum
    }
    if(pole2.value) {
        sum = `Ого, тебе уже ${pole2.value} лет, это круто, а мне сейчас 25 лет!`
        resultat2.textContent = sum
    }
    if(pole2.value > 100) {
        sum = `Не думаю, что вам столько лет!`
        resultat2.textContent = sum
    }
};