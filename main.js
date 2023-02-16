const hour = new Date().getHours();
const greeting = document.querySelector('.time_allert');

if (hour >= 18) {
  greeting.textContent = 'Добрый вечер!';
} else if (hour >= 12) {
  greeting.textContent = 'Добрый день!';
} else if (hour >= 5) {
  greeting.textContent = 'Доброе утро!';
} else {
  greeting.textContent = 'Доброй ночи!';
}
