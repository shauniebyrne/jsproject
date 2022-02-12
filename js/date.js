const date = new Date();
const year = date.getFullYear();
const day = date.getDay();
let weekday;

if (day === 1) {
    weekday = 'Monday';
} else if (day === 2) {
    weekday = 'Tuesday';
} else if (day === 3) {
    weekday = 'Wednesday'
} else if (day === 4) {
    weekday = 'Thursday';
} else if (day === 5) {
    weekday = 'Friday';
} else {
    weekday = 'Weekend';
}

document.querySelector('#weekday').textContent = weekday;
document.querySelector('#year').textContent = year;