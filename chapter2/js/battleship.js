var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = prompt("Внимание, огонь! (введите число между 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Пожалуйста, введите корректное значение ячейки");
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попадание!");
            hits += 1;
            if (hits == 3) {
                isSunk = true;
                alert("Вы потопили корабль");
            }
        } else {
            alert("Мимо");
        }
    }
}

var stats = "Вы произвели " + guesses + " выстрелов чтобы потопить корабль, " +
    "меткость ваших выстрелов составила " + (3 / guesses);
alert(stats);