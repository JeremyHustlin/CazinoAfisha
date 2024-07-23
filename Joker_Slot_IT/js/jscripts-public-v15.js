var iInterval;
localStorage.setItem("counter", 10); 

setTimeout(function (number) { // Jackpot Init
    var inputs = document.getElementsByClassName("jNumberValue")
    var counter;


    for (var i = 0, len = inputs.length; i < len; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        counter = Number(localStorage.getItem("counter"));
        

        counter += randomNumber;
        localStorage.setItem("counter", counter); 
        

        inputs[i].innerHTML = currency(inputs[i].getAttribute("jackpot-value"), { separator: ',' }).add('.' + counter).format(); //random from 0 to 3
    }



}, 500);



clearInterval(iInterval); 

iInterval = setInterval(function (number) { // Jackpot Update
  var inputs = document.getElementsByClassName("jNumberValue")
  var counter;
 


  for (var i = 0, len = inputs.length; i < len; i++) {
      var randomNumber = Math.floor(Math.random() * 4);
      counter = Number(localStorage.getItem("counter"));
        
      counter += randomNumber;
      localStorage.setItem("counter", counter);  


      inputs[i].innerHTML = currency(inputs[i].getAttribute("jackpot-value"), { separator: ',' }).add('.' + counter).format(); //random from 0 to 3
  }
}, 1000);