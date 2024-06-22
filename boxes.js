document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
function toggleBoxes() {

  var checkBox = document.getElementById("showalek");
  var div = document.getElementById("alek");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showaqio");
  var div = document.getElementById("aqio");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showlam93");
  var div = document.getElementById("lam93");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showliberal");
  var div = document.getElementById("liberal");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showurban");
  var div = document.getElementById("urban");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  input.dispatchEvent(new Event('input'));
}
