'use strict'

let week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

let modal = document.querySelector('.modal');

for (let i = 0; i < week.length; i++) {
    let weekDay = document.createElement('p');

    if (i == 5 || i == 6) {
        weekDay.innerHTML = `<b>${week[i]}</b>`;
    } else if (i == 4) {
        weekDay.innerHTML = `<i>${week[i]}</i>`;
    } else {
        weekDay.innerHTML = `${week[i]}`;
    };

    modal.appendChild(weekDay);
};

let closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

//Вторая часть задания

let arr = [
    '3465',
    '567',
    '76574',
    '67',
    '5',
    '38766',
    '0'
];

for (let i = 0; i < arr.length; i++) {
    if ( (arr[i][0] == '3') || (arr[i][0] == '7') ) {
        console.log(arr[i]);
    };
};