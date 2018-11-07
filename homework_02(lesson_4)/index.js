"use strict";

//Homework_02 - решение всех задач в этой и последующих домашних работах должно быть выполнено с использованием функций!

// Задача № 1
/* Меньше, больше. Разработать функции для нахождения меньшего, большего из двух чисел. */

// RESULT:
/*
function getMinValue () {
    var value1 = +prompt ("Введите значение 1 из 2", "");
    var value2 = +prompt ("Введите значение 2 из 2", "");
    if (value1 > value2) {
        alert ("Минимальное значение: " + value2);
        alert ("Максимальное значение: " + value1); }
    else if (value1 < value2) {
        alert ("Минимальное значение: " + value1);
        alert ("Максимальное значение: " + value2); }
     else { alert ("Значения равны!");}
}
getMinValue();
*/

//---------------------------

//Задача № 2
/* Сделайте функцию, которая принимает год, а возвращает високосный это год или нет.
Год является високосным в двух случаях: либо он кратен (делится на) 4, но при этом не кратен 100, либо кратен 400.
Год не является високосным, если он не кратен 4, либо он кратен 100, но при этом не кратен 400.
Последние годы столетий, оканчивающиеся на два нуля, в трёх случаях из четырёх не являются високосными. Так, годы 1700, 1800 и 1900 не являются високосными,
так как они кратны 100 и не кратны 400. Годы 1600 и 2000 — високосные, так как они кратны 400. Годы 2100, 2200 и 2300 — невисокосные. */

// RESULT:
/*
 function getLeapYear () {
    var year = +prompt ("Введите год", "");
    if (year%4 == 0 && year%100 != 0 || year%400 == 0) {
    alert ("Это високосный год!");}
    else {
    alert ("Это НЕвисокосный год");}
 }
 getLeapYear ();
 */

//---------------------------

//Задача № 3
/* Простое число. Написать функцию, которая проверяет: является ли некоторое число простым? Число называется простым, если оно делится без остатка только на себя и на единицу. */

// RESULT:
/*
function checkPrimeNumber() {
  var value = +prompt ("Введите число", "");

  for (var i = 2; i < value; i++) {

    if (value % i === 0) {
      return alert("Это НЕ правильное число!"); //false (
      /* за счет того, что использован return - значение возращается один раз и функция прерывается!
      Если бы не было return, а было просто alert, окно alert'a покажется столько раз, сколько раз будет справедлмиво условие value % i === 0)
       */
/*    }
  }
  return alert ("Это правильное число!"); //true
}
checkPrimeNumber();
*/

//---------------------------

//Задача № 4
/* Квадратное уравнение. ax2 + bx + c = 0
Даны три числа: a, b, c - коэффициенты квадратного уравнения. Решить квадратное уравнение.
Для нахождения квадратного корня из дискриминанта понадобится встроенный объект Math и его метод sqrt (Math.sqrt(9). */

// RESULT:
/*
function calcQuadEqua() {
  var a = +prompt ("В квадратном уравнении ax2+bx+c=0  a = ", "");
  var b = +prompt ("В квадратном уравнении ax2+bx+c=0  b = ", "");
  var c = +prompt ("В квадратном уравнении ax2+bx+c=0  с = ", "");
  confirm ("Решить полученное уравнение с переменными  a = " + a + "; b = " + b + "; с = " + c + " ?");
  var D = b * b - 4 * a * c;
  var x1 = (- b + Math.sqrt(D)) / (2 * a);
  alert ("Корень x1 = " + x1);
  /* если бы  вместо alert стоял return, корень x1 вернулся бы и отобразился, но функция
  при этом прервется и, ясное дело, второе значение корня просто не вернется. */
/* var x2 = (- b - Math.sqrt(D)) / (2 * a);
  alert ("Корень x2 = " + x2);
}
calcQuadEqua();
*/

//---------------------------

//Задача № 5
/* Найти дискриминант (D) и решить квадратное уравнение.
   1. Если D < 0, то квадратное уравнение не имеет корней (вывести уведомление об этом);
   2. Если D = 0, то квадратное уравнение имеет один корень (вычислить и вывести его);
   3. Если D > 0, то квадратное уравнение имеет два корня (вычислить и вывести их);
   Для решения пункта 3, понадобится встроенный объект Math и его метод sqrt (Math.sqrt(9)), чтобы вычислить квадратный корень,
   это как раз то, что я вспоминал чего может не хватить. */

// RESULT:
/*
function calcD() {
  var a = +prompt ("В квадратном уравнении ax2+bx+c=0  a = ", "");
  var b = +prompt ("В квадратном уравнении ax2+bx+c=0  b = ", "");
  var c = +prompt ("В квадратном уравнении ax2+bx+c=0  с = ", "");
  confirm ("Найти дискриминант квадратного уравнения с переменными  a = " + a + "; b = " + b + "; с = " + c + " ?");
  var D = b * b - 4 * a * c;
  alert ("Дискриминант = " + D);

  if (D < 0) {
  return alert ("Квадратное уравнение не имеет корней, т.к. D < 0"); // например, a=2, b=2, c=1.
  } else

  if (D == 0) {
  alert ("Квадратное уравнение имеет один корень, т.к. D = 0. Нажмите Ok, чтобы вычислить его"); // например, a=1, b=2, c=1.
  var x1 = (- b + Math.sqrt(D)) / (2 * a);
  return alert ("Корень x1 = x2 = " + x1);
  } else

  if (D > 0) {
  alert ("Квадратное уравнение имеет два корня, т.к. D > 0. Нажмите Ok, чтобы вычислить их"); // например, a=3, b=6, c=-9; или a=1, b=-7, c=10; или a=2, b=3, c=-2;
  var x1 = (- b + Math.sqrt(D)) / (2 * a);
  alert ("Корень x1 = " + x1); // если бы  вместо alert стоял return, корень x1 вернулся бы и отобразился, но функция при этом прервется и, ясное дело, второе значение корня просто не вернется.
  var x2 = (- b - Math.sqrt(D)) / (2 * a);
  alert ("Корень x2 = " + x2);
  }
}
calcD();
*/

//---------------------------
