
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

//function for all microsoft button
function ab() {
    var x = document.getElementById('p1');
    var y = document.getElementById('p2');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.backgroundColor ="#E5E7EB";
  } else {
    x.style.display = 'none';
    y.style.background ="none";
  }
    
}


// scroll function calll is here 
function scrollFunction() {

  
var mybutton = document.getElementById('mybtn');

  mybutton.style.display = 'block';
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}


//for home button
function akc() {
  var items = document.getElementById('p4');
  var cross = document.getElementById('p5');
  var home =document.getElementById('p6');
  
  if (items.style.display === 'none') {
    items.style.display = 'block';
    cross.style.display = 'block'
    home.style.display = 'none';
    
  }
  else{
    items.style.display = 'none';
    home.style.display = 'block';
    cross.style.display = 'none';
  }
}

//for search button
function search1() {
  var srchBtn=document.getElementById('forsearch');
  var cart = document.getElementById('cart');
  cart.style.display = 'none';

  srchBtn.style.display = 'block';

}

//for button close
function cloz() {
  
  var srchBtn1=document.getElementById('forsearch');
  srchBtn1.style.display = 'none';
  var cart = document.getElementById('cart');
  cart.style.display = 'block';
  
}