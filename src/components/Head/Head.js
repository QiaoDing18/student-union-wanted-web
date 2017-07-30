export default {
  name: 'Head'
}

window.onload = function(){
  var down0 = document.getElementById('down0');
  var thing1 = document.getElementsByClassName('head-1')[0];
  var thing2 = document.getElementsByClassName('head-2')[0];
  var thing3 = document.getElementsByClassName('head-3')[0];
  var thing4 = document.getElementsByClassName('head-4')[0];
  var thing5 = document.getElementsByClassName('head-5')[0];
  var thing6 = document.getElementsByClassName('head-6')[0];
  var thing7 = document.getElementsByClassName('head-7')[0];
  setInterval(function(){
    down0.setAttribute('class', 'head-7 animated bounce');
    setTimeout(function(){
      down0.setAttribute('class', 'head-7');
    }, 1200);
  }, 2500);

  setInterval(function(){
    thing1.setAttribute('class', 'head-1 animated pulse');
    setTimeout(function(){
      thing1.setAttribute('class', 'head-1');
    }, 1000);
  }, 2000);

  setTimeout(function(){
    thing1.style.display = "block";
    thing1.setAttribute("class", "head-1 animated bounceInRight");
    setTimeout(function(){
      thing2.style.display = "block";
      thing2.setAttribute("class", "head-2 animated bounceInRight");
      setTimeout(function(){
        thing3.style.display = "block";
        thing3.setAttribute("class", "head-3 animated bounceIn");
        setTimeout(function(){
          thing4.style.display = "block";
          thing4.setAttribute("class", "head-4 animated bounceIn");
          setTimeout(function(){
            thing5.style.display = "block";
            thing5.setAttribute("class", "head-5 animated bounceIn");
            setTimeout(function(){
              thing6.style.display = "block";
              thing6.setAttribute("class", "head-6 animated bounceIn");
              setTimeout(function(){
                down0.style.display = "block";
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 500);
    }, 500);
  }, 0);
}