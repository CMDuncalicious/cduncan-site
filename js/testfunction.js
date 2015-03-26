function toggle(element) {
  var hoverid = document.getElementById(element);
  if(hoverid.style.display == "block") {
    hoverid.style.display = "none";
  } else {
    hoverid.style.display = "block";
  }
};
$('#name').tooltip({'trigger':'focus', 'title': "Hey visitor, what's your name?"});
$('#email').tooltip({'trigger':'focus', 'title': "If you wanna chat, go ahead and enter your email, I'll reply asap."});
$('#extra').tooltip({'trigger':'focus', 'title': "If you like the site or think improvements can be made, leave a comment, I love hearing from visitors"});
