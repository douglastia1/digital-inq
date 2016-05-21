function AnswerCorrect(userAnswer, rightAnswer) {
    if(userAnswer == rightAnswer){
        alert("Right")
        
    } else {
        alert("Wrong");
    }
}
function swapStyleSheet (sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}
$(document).ready(function() {
    $("button").click(function() {
        var pick = $(event.target).text();
       console.log(pick); 
    });
     //------------TImer---------//
   window.onload = function(){
  
(function(){
  var counter = 90;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
        //alert('this is where it happens');
        swapStyleSheet('00s.css');
        $("div.g").addClass("confetti");
        //$("div.g").removeClass("confetti");
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