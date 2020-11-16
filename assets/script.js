var mas = ['ОСТОРОЖНО!', 'ЭТО СТРАНИЦА НАСТИ ЛАПКО!', 1];
var first = mas[0];
alert (first);

var second = mas[1];
alert (second);

mas[2] = 'Вы уверены, что хотите её посетить?';
alert (mas[2]);
var third = mas[2];

mas.splice(0, 0, 'ГОВОРЮ ЖЕ,');
mas.splice(4, 0, '??');

var phrase = mas[0] + ' ' + first + ' ' + second + ' ' + third +  mas[4]; 

alert (phrase);