let nav =0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const weekdays = ['Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const calendar = document.getElementById('calendar');

function load(){
    const dt = new Date();

    if (nav !== 0){
        dt.setMonth(new Date().getMonth()+nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month+1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-GB',{
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText = 
        `${dt.toLocaleDateString('en-GB', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for(let i=1; i<= paddingDays + daysInMonth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if(i> paddingDays){
            daySquare.innerText = i - paddingDays;

            daySquare.addEventListener('click', () => console.log('click'));
        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }  
}

function initButtons(){
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    })    
    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    }) 
}

initButtons();
load();