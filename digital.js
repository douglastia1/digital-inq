var score = 0;
function AnswerCorrect(userAnswer, rightAnswer) {
    if(userAnswer == rightAnswer){
        return true;

    } else {
        return false;
    }
}
function swapStyleSheet (sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}
function LoadNextArtist () {
    console.log(" hello next artist");
}
$(document).ready(function() {
  

    var artistIndex = Math.floor(Math.random() * artists.length);
   $("#artist1").text(artists[artistIndex].Name);
   
   
   
    $(".btn").click(function() {
        var pick = $(event.target).text();
       console.log(pick); 
        var result = AnswerCorrect (pick, "Kurt Cobain"); 
       if (result) {
          $('.artist').css('-webkit-filter', 'blur(0px)');
          score +=100
           $('#score').text(score);
           setTimeout(LoadNextArtist, 3000);
       }
       else {
          $(event.target).css('text-decoration', 'line-through'); 
       }
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
     

   
})