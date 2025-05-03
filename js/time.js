function Clock() {
  const now = new Date();

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  const time = now
    .toLocaleTimeString(undefined, timeOptions)
    .replace(/am|pm/i, (match) => match.toUpperCase());

  document.getElementById('time').textContent = 'Time: ' + time;
}

setInterval(Clock, 1000);
Clock();
