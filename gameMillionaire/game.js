"use strict"

function* milionater() {
    let trueAnswer = true;
    let helpOf50 = true;
    let money = 0;

    let index = 0;
    let pass = (helpOf50) ? "5) Pass 6) 50/50" : "5) Pass";

    let salary = [500, 500, 1000, 1000, 2000, 5000, 5000, 10000, 25000, 50000, 100000, 200000, 400000, 700000, 1500000]
    //1
    const question1 = "Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?\n1) 31       3) 3600\n2) 90       4) 365\n" + pass;
    helper(question1, 4, "1) 31  4) 365");
    yield;
    //2
    if (trueAnswer) {
        const question2 = "Из какого зерна делается японский спирт саке?\n1) Рис              3) Ячмень\n2) Гречка        4) Кукуруза\n" + pass;
        helper(question2, 1, "1) Рис  3) Ячмень")
        yield;
    }
    //3
    if (trueAnswer) {
        const question3 = "Какое национальное животное Австралии?\n1) Кенгуру                           3) Меведь\n2) Красный кенгуру        4) Коала\n" + pass;
        helper(question3, 2, "1) Кенгуру                           3) Меведь")
        yield;
    }

    //4
    if (trueAnswer) {
        const question4 = "Какой национальный цветок Японии?\n1) Сакура      3) Ромашки\n2) Лотос        4) Хризантема\n" + pass;
        helper(question4, 1, "1) Сакура      2) Лотос")
        yield;
    }

    //5
    if (trueAnswer) {
        const question5 = "Сколько полос на флаге США?\n1) 21        3) 13\n2) 51        4) 11\n" + pass;
        helper(question5, 3, "3) 13\n2) 51")
        yield;
    }

    //6
    if (trueAnswer) {
        const question6 = "Сколько спутников у Марса?\n1) 13        3) 2\n2) 50        4) 1\n" + pass;
        helper(question6, 3, "1) 13        3) 2")
        yield;
    }

    //7
    if (trueAnswer) {
        const question7 = "Какая планета ближе всех расположена к Солнцу?\n1) Земля                3) Венера\n2) Меркурий        4) Нептун\n" + pass;
        helper(question7, 2, "2) Меркурий        4) Нептун\n")
        yield;
    }

    //8
    if (trueAnswer) {
        const question8 = "Сколько часовых поясов в России?\n1) 7          3) 15\n2) 11        4) 9\n" + pass;
        helper(question8, 2, "3) 15\n2) 11")
        yield;
    }

    //9
    if (trueAnswer) {
        const question9 = "Какая из этих планет самая маленькая?\n1) Юпитер      3) Уран\n2) Земля         4) Меркурий\n" + pass;
        helper(question9, 4, "n1) Юпитер         4) Меркурий\n")
        yield;
    }

    //10
    if (trueAnswer) {
        const question10 = "Кто из боксеров дрался с Мухаммедом Али и победил?\n1) Рой Джонс                  3) Флойд Мэйвезер\n2) Сауль Альварес        4) Джо Фрейзер\n" + pass;
        helper(question10, 4, "2) Сауль Альварес        4) Джо Фрейзер")
        yield;
    }

    //11
    if (trueAnswer) {
        const question11 = "Каков рекорд Усэйна Болта в беге на 100 метров?\n1) 7,2с.          3) 9,58с.\n2) 10,3с.        4) 6,8с.\n" + pass;
        helper(question11, 3, "3) 9,58с.   2) 10,3с.")
        yield;
    }

    //12
    if (trueAnswer) {
        const question12 = "Кто первым совершил выход в открытый космос, который длился двенадцать минут?\n1) Юрий Гагарин                        3) Алексей Леонов\n2) Валентина Терешкова        4) Владимир Комаров\n" + pass;
        helper(question12, 3, "1) Юрий Гагарин                        3) Алексей Леонов")
        yield;
    }

    //13
    if (trueAnswer) {
        const question13 = "Какой континент на Земле самый большой?\n1) Евразия               3) Африка\n2) Антарктида        4) Зеландия\n" + pass;
        helper(question13, 1, "1) Евразия       4) Зеландия")
        yield;
    }

    //14
    if (trueAnswer) {
        const question14 = "В какой стране самая длинная береговая линия в мире?\n1) В Россие        3) В США\n2) Франция        4) В Канаде\n" + pass;
        helper(question14, 4, "3) В США        4) В Канаде")
        yield;
    }

    //15
    if (trueAnswer) {
        const question15 = "Какой известный художник был скульптором, архитектором и инженером?\n1) Микеланджело                3) Донателло\n2) Леонардо да Винчи        4) Титов\n" + pass;
        helper(question15, 2, "1) Микеланджело      2) Леонардо да Винчи")
        yield;
    }


    function helper(h, p, f) {
        let ask = +prompt(h)
        if (ask === p) {
            money += salary[index];
            index++;
        } else if (ask === 5) {
            alert("Ваш выгрош составляет " + money + " рублей.\nПравильный ответ " + p);

        } else if (ask === 6) {
            if (helpOf50) {
                helper(f, p, f);
                helpOf50 = false;

            } else {
                alert("Вы уже использовали 50/50");
                helper(h, p, f)
            }

        } else {
            trueAnswer = false;
            alert(`Правильный ответ " + ${p}`);
        }

    }

};

const game = milionater();
for (const iterator of game) {
    iterator
}
