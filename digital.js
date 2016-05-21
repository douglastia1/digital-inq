var score = 0;
var lastpick;
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
    console.log(artists[artistIndex].Name);
    var Index= Math.floor(Math.random() * 4);
    var choosingArtist = artists[artistIndex].Name;
      $($(".d")[Index]).text(choosingArtist);
      $("#description").text(artists[artistIndex].Hit);


$("#artistimage").attr("src", "img/" + artists[artistIndex].Img);
   
    $(".btn").click(function() {
        var pick = $(event.target).text();
       console.log(pick); 
        var result = AnswerCorrect (pick, choosingArtist); 
       if (result) {
          $('.artist').css('-webkit-filter', 'blur(0px)');
          if (lastpick!=pick){score+=100};
           $('#score').text(score);
           lastpick = pick;
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