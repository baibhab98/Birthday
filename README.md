<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Happy Birthday Shreya!</title>
  <link rel="stylesheet" href="style.css">

  <!-- External Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-database-compat.js"></script>
</head>

<body>

<div class="parallax">
  <div class="hero">
    <h1 class="birthday-text">Happy Birthday Shreya!</h1>
    <p class="subtext">Send your special wish below</p>
    <button id="scrollDown">Send a Wish</button>
  </div>
</div>

<div id="balloons"></div>

<section class="wish-section" id="wishSection">
  <form id="wishForm">
    <input type="text" id="name" placeholder="Your Name" required>
    <textarea id="message" placeholder="Write your lovely wish..." required></textarea>
    <button type="submit">Send Wish</button>
  </form>

  <button id="autoWish">Suggest a Wish</button>

  <!-- YOUR SPECIAL NOTE ADDED HERE -->
  <div class="special-note">
    <h2>🎈🌟🎉 Happy Birthday, Dear Shreya! 🎉🌟🎈</h2>
    <p>Wishing the most talented Artist and inspiring Topper a fantastic birthday! May your special day be filled with colorful paint strokes and endless achievements. Keep shining bright like the star that you are and continue to dazzle the world with your creativity and intelligence. Here's to another year of success, happiness, and unforgettable memories. Cheers to you, Shreya! 🎉🌟🎈</p>
    <h3>From: <span class="from-name">Shreya</span></h3>
  </div>

  <h2>All Wishes</h2>
  <div id="wishesContainer"></div>
</section>

<audio id="birthdaySong" loop autoplay>
  <source src="birthday-song.mp3" type="audio/mp3">
</audio>

<script src="script.js"></script>

</body>
</html>
