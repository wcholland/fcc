// var quotes = [
// 'Blah blah', 
// '2 blah blah',
// '3 blah blah'
// ]

// function randomQuote() {
//   var randomNumber = Math.floor(Math.random() * (quotes.length));
//   document.getElementById('random-quote').innerHTML = quotes[randomNumber];
// }












function randomQuote() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random-quote").html("<p id='random-quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

$("btn").click(function(){
  randomQuote();
});





















// http://codepen.io/catapixel/pen/LpVEgy

// function randomQuote() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById('random-quote').innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en", true);
//   xhttp.send();
// }



// function randomQuote() {
//   var quotePull = api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=html&lang=en;
//   var quotePush = document.getElementById('random-quote').innerhtml = quote;
//   return quotePush;
// }



