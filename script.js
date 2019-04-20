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

const modal = document.querySelector('.modal');

for (let i = 0; i < week.length; i++) {
    let weekDay = document.createElement('p'),
        weekPrint = week[i];

    if (i == 5 || i == 6) {
        weekPrint = weekPrint.bold();
    };
    if (i == 5) {
        weekPrint = weekPrint.italics();
    };

    weekDay.innerHTML = `${weekPrint}`;
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