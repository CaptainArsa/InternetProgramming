let a = NaN;
while (true)
{
    a = parseInt(prompt('Введите значение a', '10'));
    if (!isNaN(a)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let b = NaN;
while (true)
{
    b = parseInt(prompt('Введите значение b', '20'));
    if (!isNaN(b)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let c = NaN;
while (true)
{
    c = parseInt(prompt('Введите значение c', '30'));
    if (!isNaN(c)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let x = NaN;
while (true)
{
    x = parseInt(prompt('Введите значение x', '40'));
    if (!isNaN(x)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let y = NaN;
while (true)
{
    y = parseInt(prompt('Введите значение y', '50'));
    if (!isNaN(y)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let z = NaN;
while (true)
{
    z = parseInt(prompt('Введите значение z', '60'));
    if (!isNaN(z)) break;
    else alert('Пожалуйста введите значение правильно!');
}

document.write('<p>(Вариант 13)</p>');
document.write('<p><b>Объем и площать основания параллелепипеда со сторонами ' + a + ', ' + b + ', ' + c + ':</b></p>');
document.write('<p>S = ' + a * b + '</p>');
document.write('<p>V = ' + a * b * c + '</b></p>');

document.write('<p><b>Значение переменной b, при условии:</b></p>');
document.write('<img src="images/expression.png" />');
let answer = (z-x)*(y-Math.log(z))/(1+Math.pow((y-x),2));
document.write('<p>b = ' + answer + '</p>');
