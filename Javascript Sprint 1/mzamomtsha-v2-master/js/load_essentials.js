// Filling common content into document.
var content = {
    "header": "<div class='logo'><img src='images/logo.png' alt='School Badge'/></div><div class='header-top'><div class='school-title'><h2>Mzamomtsha Primary School</h2></div><div class='search-container'> <input type='text' placeholder='Search...' name='search'> <button type='submit'><i class='fa fa-search'></i></button> </div></div><div class='header-nav'> <ul class='navigation'> <li><a href='/'>HOME</a></li><li><a href='/about.html'>ABOUT</a></li><li><a class='active' href='/events.html'>EVENTS</a></li></ul> </div>",
    "footer": "<div class='footer-container'><div class='contact-details'><div class='school-name'><h3>Mzamomtsha Primary</h3></div><div class='contact-details-title'><p><b><u>Contact Details</u></b></p></div><div class='c1'> <i class='fa fa-phone'></i> 021 436 3763 </div> <div class='email'> <i class='fa fa-envelope-o'></i> Mzamomtsha@outlook.com </div><br><div class='social-media-title'><b><u>Social Media</u></b></div><br><div class='social-media-icons'> <div class=''><a href='#'><i class='fa fa-facebook'></i></a></div><div class=''><a href='#'><i class='fa fa-twitter'></i></a></div><div class=''><a href='#'><i class='fa fa-instagram'></i></a></div></div></div><div class='quick-links'><p class='title'><b>Quick Links</b></p><div class=''><ul class='links'><a href='#'>Donate</a>&nbsp;<a href='/about'>About</a>&nbsp;<a href='/#gallery'>Gallery</a></ul></div></div><div class='contact-us'><p class='title'><b>Contact Us</b></p>	<div class='a3'><form action='mailto:you@yourwebsite.com'><input type='text' placeholder='Email address' class='textbox' name='email'/><br><textarea id='message' rows='6' cols='22' class='textbox' placeholder='Message'></textarea><br><button type='submit' class='btn'>Send</button></form></div></div></div><div class='footer-end'><h5>Copyright © Mzamomtsha Primary School 2020</h5></div>"
};

for (var key in content) {
    document.getElementById(key).innerHTML = content[key];
}


/*var question = document.getElementsByClassName("Expand");

for (var i = 0; i < question.length; i++){
  question[i].onclick = function(){
    var content = this.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    }else{
      content.style.maxHeight = content.srollHeight + "px";
    }
  }
}*/
