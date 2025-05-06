function Clock() {
  const now = new Date();

  const dayOptions = { weekday: 'long' };
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const day = now.toLocaleDateString(undefined, dayOptions);
  const date = now.toLocaleDateString(undefined, dateOptions);

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  let time = now.toLocaleTimeString(undefined, timeOptions);
  time = time.replace(/am|pm/i, (match) => match.toUpperCase());

  document.getElementById('day').innerHTML = `Day: ${day}`;
  document.getElementById('date').innerHTML = `Date: ${date}`;
  document.getElementById('clock').innerHTML = `Time: ${time}`;
}

setInterval(Clock, 1000);
Clock();
