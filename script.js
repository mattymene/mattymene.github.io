function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function startDownloadCountdown(url) {
  // Mostra il banner del countdown
  const banner = document.getElementById('countdown-banner');
  const timer = document.getElementById('countdown-timer');
  banner.style.display = 'block';

  // Imposta il countdown
  let timeLeft = 30;
  timer.textContent = timeLeft;

  const countdownInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      window.location.href = url;
    }
  }, 1000);
}

