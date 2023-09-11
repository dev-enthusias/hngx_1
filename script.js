const dayEl = document.querySelector('.day');
const timeEl = document.querySelector('.time');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();

dayEl.textContent = days[date.getDay()];

const timer = () => {
  const currentTime = date.setTime(new Date());
  timeEl.textContent = currentTime;
};
timer();

setInterval(timer, 1000);
