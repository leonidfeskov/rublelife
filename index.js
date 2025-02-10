const DAYS_IN_MONTH = 30;
const HOURS_IN_DAY = 24;
const HOURS_IN_MONTH = DAYS_IN_MONTH * HOURS_IN_DAY;

const form = document.querySelector('#calculator');
const button = document.querySelector('.calculate');
const resultBlock = document.querySelector('.result-block');
const result = document.querySelector('.result');

button.addEventListener('click', function(event) {
    event.preventDefault();

    const salary = parseInt(form.salary.value);
    const workSchedule = form.workSchedule.value
    const workingHours = parseInt(form.workingHours.value);
    const [workDays, restDays] = workSchedule.split('/').map((x) => parseInt(x));

    const hourCost = salary / HOURS_IN_MONTH;
    const workDaysPercentagePerMonth = workDays / (workDays + restDays);
    const workHoursPerMonth = DAYS_IN_MONTH * workDaysPercentagePerMonth * workingHours;
    const workHoursPercentagePerMonth = workHoursPerMonth / HOURS_IN_MONTH;

    const rublelife = Math.round(hourCost / workHoursPercentagePerMonth);

    console.log('workSchedule', workSchedule);
    console.log('workingHours', workingHours);
    console.log('workHoursPerMonth', workHoursPerMonth)
    console.log('hourCost', hourCost);
    console.log('workHoursPercentagePerMonth', workHoursPercentagePerMonth);

    resultBlock.style.display = 'block';
    result.innerHTML = `Ваш коэффициент рублежизней: <b>${rublelife}</b>`;
});





