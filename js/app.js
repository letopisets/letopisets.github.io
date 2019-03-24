function myFunc ()
{
K = 2; // коэффициент увеличения размера
DIR = 1; Rmax = K * document.getElementById ('logoname').offsetWidth;
setInterval (function () 
   {
   var R = document.getElementById ('logoname').offsetWidth;
   R += DIR; 
   if (R == Rmax || R == parseInt (Rmax / K)) DIR *= -1; 
   document.getElementById ('logoname').style.width = R + 'px';
   }, 1);
}
var wrapper = document.querySelector(".name");
var text = document.querySelector(".text");

var textCont = text.Content;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}
  
 