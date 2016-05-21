function AnswerCorrect(userAnswer, rightAnswer) {
    if(userAnswer == rightAnswer){
        alert("Right")
        
    } else {
        alert("Wrong");
    }
}

$(document).ready(function() {
    $("button").click(function() {
        var pick = $(event.target).text();
       console.log(pick); 
    });
     //------------TImer---------//
   window.onload = function(){
  
(function(){
  var counter = 12;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
        alert('this is where it happens');
        $("div").addClass("confetti");
        clearInterval(counter);
    }
    
  }, 1000);
    
})();
  
}
     //-----------------Score-------------------//
     var score = 0;
 $('button').click(function() {
     
     
    $('#score').text(score++);
});
   
})