import Swiper from './../../../static/swiper-3.4.2.min.js';
require('./../../../static/swiper-3.4.2.min.css');

export default {
  name: 'app',
  mounted () {
    var mySwiper = new Swiper('#app', {
      direction: 'vertical',
      resistanceRatio: 0,
      initialSlide: 0,
      onTransitionEnd: function (swiper) {
        var left = document.getElementsByClassName('content-left');
        var top = document.getElementsByClassName('content-top');
        var text1 = document.getElementsByClassName('content-text1');
        var right = document.getElementsByClassName('content-right');
        var bottom = document.getElementsByClassName('content-bottom');
        var text2 = document.getElementsByClassName('content-text2');

        function go(index){
          setTimeout(function(){
            left[index].style.display = 'block';
            left[index].setAttribute("class", "content-left animated bounceInRight");
            setTimeout(function(){
              top[index].style.display = 'block';
              top[index].setAttribute("class", "content-top animated bounceInRight");
              setTimeout(function(){
                text1[index].style.display = 'block';
                text1[index].setAttribute("class", "content-text1 animated bounceIn");
                if(index==4){
                  setTimeout(function(){
                    var box = document.getElementsByClassName('joinBox')[0];
                    var down5 = document.getElementById('down5');
                    box.style.display = "block";
                    box.setAttribute("class", "joinBox animated bounceIn");
                    down5.style.display = 'block';
                  }, 200);
                  return;
                }
                setTimeout(function(){
                  right[index].style.display = 'block';
                  right[index].setAttribute("class", "content-right animated bounceInLeft");
                  setTimeout(function(){
                    bottom[index].style.display = 'block';
                    bottom[index].setAttribute("class", "content-bottom animated bounceInLeft");
                    setTimeout(function(){
                      text2[index].style.display = 'block';
                      if(index==3){
                        text2[index].setAttribute("class", "qing content-text2 animated bounceIn");
                      }else{
                        text2[index].setAttribute("class", "content-text2 animated bounceIn");
                      }
                      text2[index].setAttribute("class", "content-text2 animated bounceIn");
                      setTimeout(function(){
                        if(index==0){
                          var down1 = document.getElementById('down1');
                          down1.style.display = 'block';
                        }
                        if(index==1){
                          var down2 = document.getElementById('down2');
                          down2.style.display = 'block';
                        }
                        if(index==2){
                          var down3 = document.getElementById('down3');
                          down3.style.display = 'block';
                        }
                        if(index==3){
                          var down4 = document.getElementById('down4');
                          down4.style.display = 'block';
                        }
                      }, 200);
                    }, 200);
                  }, 200);
                }, 10);
              }, 200);
            }, 200);
          }, 0);
        }

        if(swiper.activeIndex == 1){
          go(0);
        }
        if(swiper.activeIndex == 2){
          go(1);
        }
        if(swiper.activeIndex == 3){
          go(2);
        }
        if(swiper.activeIndex == 4){
          go(3);
        }
        if(swiper.activeIndex == 5){
          go(4);
        }
      }
    });

    if(document.body.clientWidth>800){
      document.getElementsByTagName('body')[0].style.display = 'none';
      alert("请使用手机浏览器报名");
    }
    if(window.orientation==90||window.orientation==-90){
      document.getElementsByTagName('body')[0].style.display = 'none';
      alert("请切换设备重力状态后刷新");
    }
    function fuck(){
      var left = document.getElementsByClassName('content-left');
      var top = document.getElementsByClassName('content-top');
      var text1 = document.getElementsByClassName('content-text1');
      var right = document.getElementsByClassName('content-right');
      var bottom = document.getElementsByClassName('content-bottom');
      var text2 = document.getElementsByClassName('content-text2');

      function go(index){
        setTimeout(function(){
          left[index].style.display = 'block';
          left[index].setAttribute("class", "content-left animated bounceInRight");
          setTimeout(function(){
            top[index].style.display = 'block';
            top[index].setAttribute("class", "content-top animated bounceInRight");
            setTimeout(function(){
              text1[index].style.display = 'block';
              text1[index].setAttribute("class", "content-text1 animated bounceIn");
              if(index==4){
                setTimeout(function(){
                  var box = document.getElementsByClassName('joinBox')[0];
                  var down5 = document.getElementById('down5');
                  box.style.display = "block";
                  box.setAttribute("class", "joinBox animated bounceIn");
                  down5.style.display = 'block';
                }, 200);
                return;
              }
              setTimeout(function(){
                right[index].style.display = 'block';
                right[index].setAttribute("class", "content-right animated bounceInLeft");
                setTimeout(function(){
                  bottom[index].style.display = 'block';
                  bottom[index].setAttribute("class", "content-bottom animated bounceInLeft");
                  setTimeout(function(){
                    text2[index].style.display = 'block';
                    if(index==3){
                      text2[index].setAttribute("class", "qing content-text2 animated bounceIn");
                    }else{
                      text2[index].setAttribute("class", "content-text2 animated bounceIn");
                    }
                    text2[index].setAttribute("class", "content-text2 animated bounceIn");
                    setTimeout(function(){
                      if(index==0){
                        var down1 = document.getElementById('down1');
                        down1.style.display = 'block';
                      }
                      if(index==1){
                        var down2 = document.getElementById('down2');
                        down2.style.display = 'block';
                      }
                      if(index==2){
                        var down3 = document.getElementById('down3');
                        down3.style.display = 'block';
                      }
                      if(index==3){
                        var down4 = document.getElementById('down4');
                        down4.style.display = 'block';
                      }
                    }, 200);
                  }, 200);
                }, 200);
              }, 10);
            }, 200);
          }, 200);
        }, 0);
      }

      if(mySwiper.activeIndex == 1){
        go(0);
      }
      if(mySwiper.activeIndex == 2){
        go(1);
      }
      if(mySwiper.activeIndex == 3){
        go(2);
      }
      if(mySwiper.activeIndex == 4){
        go(3);
      }
      if(mySwiper.activeIndex == 5){
        go(4);
      }
    }
    var login0 = document.getElementById('login0')
    login0.onclick = function () { mySwiper.slideTo(6, 500, false) }

    var down0 = document.getElementById('down0');
    var down1 = document.getElementById('down1');
    var down2 = document.getElementById('down2');
    var down3 = document.getElementById('down3');
    var down4 = document.getElementById('down4');
    var down5 = document.getElementById('down5');
    down0.onclick = function () { mySwiper.slideTo(1, 500, false); fuck(); };
    down1.onclick = function () { mySwiper.slideTo(2, 500, false); fuck(); };
    down2.onclick = function () { mySwiper.slideTo(3, 500, false); fuck(); };
    down3.onclick = function () { mySwiper.slideTo(4, 500, false); fuck(); };
    down4.onclick = function () { mySwiper.slideTo(5, 500, false); fuck(); };
    down5.onclick = function () { mySwiper.slideTo(6, 500, false); fuck(); };

    setInterval(function(){
      down1.setAttribute('class', 'down animated bounce');
      setTimeout(function(){
        down1.setAttribute('class', 'down');
      }, 1200);
    }, 2500);
    setInterval(function(){
      down2.setAttribute('class', 'down animated bounce');
      setTimeout(function(){
        down2.setAttribute('class', 'down');
      }, 1200);
    }, 2500);
    setInterval(function(){
      down3.setAttribute('class', 'down animated bounce');
      setTimeout(function(){
        down3.setAttribute('class', 'down');
      }, 1200);
    }, 2500);
    setInterval(function(){
      down4.setAttribute('class', 'down animated bounce');
      setTimeout(function(){
        down4.setAttribute('class', 'down');
      }, 1200);
    }, 2500);
    setInterval(function(){
      down5.setAttribute('class', 'down animated bounce');
      setTimeout(function(){
        down5.setAttribute('class', 'down');
      }, 1200);
    }, 2500);

    
  }
}