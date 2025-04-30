
    // Countdown Timer
    const targetDate = new Date("May 1, 2025 00:00:00").getTime();
    const timer = document.getElementById("timer");

    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        timer.innerHTML = "It's your special day!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until the celebration!`;
    }, 1000);

    // Falling Petals
    function createPetal() {
      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = (3 + Math.random() * 5) + "s";
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 8000);
    }

    setInterval(createPetal, 200);

    // Show secret message
    function showSecret() {
      document.getElementById("hidden-message").style.display = "block";
    }
  