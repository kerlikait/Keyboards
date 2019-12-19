window.onload = function () {
  document.getElementById("infoBox").style.visibility = "hidden";
}


function info(obj) {

  if ( obj.id  == "backspace") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid4.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "delete") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid5.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "tabulaator") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid6.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "capsLock") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid7.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "shiftLeft" || obj.id  == "shiftRight") {
    changeBorder(obj);
    $(shiftRight).addClass('activeDivButton');
    $(shiftLeft).addClass('activeDivButton');
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid8.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "winKeyLeft" || obj.id  == "winKeyRight") {
    changeBorder(obj);
    $(winKeyRight).addClass('activeDivButton');
    $(winKeyLeft).addClass('activeDivButton');
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid9.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "spaceBar") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid10.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "altGr") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid11.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "navigation") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid12.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "enter") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid13.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "ctrlLeft" || obj.id  == "ctrlRight") {
    changeBorder(obj);
    $(ctrlRight).addClass('activeDivButton');
    $(ctrlLeft).addClass('activeDivButton');
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid14.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "alt") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid15.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "menu") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid16.JPG"  id="infoBoxImage">';
  }
}


function changeBorder(obj){
  $(".divButton").removeClass('activeDivButton');
  $(obj).addClass('activeDivButton');
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("infoBox").style.border = "5px solid #ea0253";
}
