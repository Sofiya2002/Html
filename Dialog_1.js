var person = {
            "SNILS 1": ["Иванов",  "Иван", "Иванович", 15, "мая", 1974, "M","Исполнено"],
            "SNILS 2": ["Бураева", "Милена", "Гарегиновна", 22, "Февраля", 2002, "F","Медототвод"],
            "SNILS 3": ["Макарова", "Софья", "Сергеевна", 03, "Сентября", 2002, "F","Назначено"],
};
// console.log(person)
let SNILS
var FirstFunction = function (person,SNILS) {
     SNILS= prompt("Введите SNILS пациента", SNILS)
    infoname = person[SNILS]
    // console.log(infoname)
    alert("Информация о пациенте" +infoname)
    StatusVacc = person[SNILS][7];
    console.log(StatusVacc)
    }

// Извлекаем информацию о текущем статусе прививки
var SecondFunction = function (StatusVacc, infoname) {
// Проверяем возможность имзменения статуса
 if (StatusVacc === "Исполнено") {
     alert("Отказано в прививке пациенту" + infoname);
 } else if (StatusVacc === "Медотвод") {
     alert("Отказано в прививке пациенту" + infoname);
 } else if (StatusVacc === "Назначено") {
     alert("Исполнить прививку пациенту" + infoname)
 }   
}
ForSecond = FirstFunction(person, SNILS)
SecondFunction(StatusVacc, infoname)
//Предлагаем закончить или продолжить работу в этом окне
while (confirm("Продолжить проверку прививочного статуса?")) {
ForSecond = FirstFunction(person, SNILS)
SecondFunction(StatusVacc, infoname)
}
console.log("Сеанс проверки привовочного статуса закончен");