document.getElementById('playButton').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 7); 
    if (randomNumber === 0) {
      document.getElementById('result').innerText = "You lost!";
    
    } else {
        document.getElementById('result').innerText = "You scored " + randomNumber + " runs!";
      
    }
  });