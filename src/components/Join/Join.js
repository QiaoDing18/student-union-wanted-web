import $ from 'jquery'
export default {
  name: 'Join',
  mounted () {
    var join = {
      session: '',
      init: function(){
        this.btn1();
        this.getVer();
      },
      btn1: function(){
        var that = this;
        var btn1 = document.getElementById('btn');
        var back = document.getElementById('back');
        var table = document.getElementById('table');

        setInterval(function(){
          btn1.setAttribute('class', 'animated pulse');
          setTimeout(function(){
            btn1.setAttribute('class', '');
          }, 600);
        }, 1000);

        var pic = document.getElementById("verPic");
        pic.onclick = function(){
          var pic = document.getElementById("verPic");
          $.ajax({
            url: "http://www.tjoe18.cn:2333/verCode",
            dataType: 'jsonp',
            success: function(data){
              pic.setAttribute("src", data.result.verCode);
              that.session = data.result.session;
            }
          });
        }

        btn1.onclick = function(){
          var name = document.getElementById('name').value;
          var num = document.getElementById('num').value;
          var index1 = document.getElementById('class').selectedIndex;
          var iClass = document.getElementById('class').options[index1].text;
          var tel = document.getElementById('tel').value;
          var index2 = document.getElementById('first').selectedIndex;
          var first = document.getElementById('first').options[index2].text;
          var index3 = document.getElementById('second').selectedIndex;
          var second = document.getElementById('second').options[index3].text;
          var index4 = document.getElementById('third').selectedIndex;
          var third = document.getElementById('third').options[index4].text;
          var index5 = document.getElementById('whether').selectedIndex;
          var whether = document.getElementById('whether').options[index5].text;
          var message = document.getElementById('message').value;

          if(!name){
            alert('请输入姓名');
            return;
          }
          if(!num){
            alert('请输入学号');
            return;
          }
          if(!tel){
            alert('请输入电话');
            return;
          }
          if(!iClass){
            alert('请选择班级');
            return;
          }
          if(!first){
            alert('请至少选择一个部门');
            return;
          }
          if(!whether){
            alert('请选择是否服从调剂');
            return;
          }
          var nameRe = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
          var numRe = /^041\d{5}$/;
          var telRe = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;

          if(!nameRe.test(name)){
            alert('请检查姓名');
            return;
          }
          if(!numRe.test(num)){
            alert('请检查学号');
            return;
          }
          if(!telRe.test(tel)){
            alert('请检查电话');
            return;
          }

          else{
            var numInput = document.getElementById('numInput');
            numInput.value = num;

            back.style.display = 'block';
            table.style.display = 'block';

            var btnAdd = document.getElementById('btnGo');
            btnAdd.onclick = function(){
              var password = document.getElementById('password').value;
              var verCode = document.getElementById('verCode').value;
              $.ajax({
                url: "http://www.tjoe18.cn:2333/login",
                dataType: 'jsonp',
                data: {
                  num: num,
                  password: password,
                  verCode: verCode,
                  session: that.session,
                },
                success: function(data){
                  if(data.result.error == true){
                    alert('请检查输入');
                    return;
                  }
                  if(data.result.name != name){
                    alert('请填写正确姓名');
                    that.getVer();
                    return;
                  }
                  if(data.result.message == 'login success'){
                    var data = {
                      num: num,
                      name: name,
                      class: iClass,
                      tel: tel,
                      first: first,
                      second: second,
                      third: third,
                      whether: whether,
                      message: message,
                    };
                    $.ajax({
                      url: "http://www.tjoe18.cn:2333/add",
                      dataType: "jsonp",
                      data: {newData: data},
                      success: function(data){
                        if(data.error == true){
                          alert('报名失败 请核对信息');
                          that.getVer();
                          return;
                        }else{
                          alert('报名成功');
                          self.location.reload();
                        }
                      }
                    });
                  }
                  else{
                    alert('请检查输入');
                    that.getVer();
                    return;
                  }
                }
              });
            }
          }       
        }
        back.onclick = function(){
          back.style.display = 'none';
          table.style.display = 'none';
        }
      },

      getVer: function(){
        var that = this;
        var pic = document.getElementById("verPic");
        $.ajax({
          url: "http://www.tjoe18.cn:2333/verCode",
          dataType: 'jsonp',
          success: function(data){
            pic.setAttribute("src", data.result.verCode);
            that.session = data.result.session;
          }
        });
      },
    }
    join.init()
  }
}
