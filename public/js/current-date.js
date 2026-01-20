(function () {
  const now = new Date();
  document.getElementById('current-date').textContent = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(now);
})();
