function updateCountdown(endDate) {
    const now = new Date().getTime();
    const distance = endDate - now;
  
    if (distance <= 0) {
      document.getElementById('countdown').innerHTML = 'Countdown expired';
      showCountdownFinishedMessage();
    } else {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('countdown').innerHTML =
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  function startCountdown() {
    var endDate = new Date(document.getElementById("end-date").value).getTime();
    
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = endDate - now;
      
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      var countdownElement = document.getElementById("countdown");
      
      countdownElement.innerHTML = formatTime(days) + "d " + formatTime(hours) + "h " + formatTime(minutes) + "m " + formatTime(seconds) + "s";
      
      if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "EXPIRED";
  
        document.getElementById("buzzer").play();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  