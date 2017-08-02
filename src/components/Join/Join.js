import Vue from 'vue'
import $ from 'jquery'
export default {
  name: 'Join',
  data () {
    return {
      name: '', iClass: '', num: '', tel: '', first: '', second: '', third: '', whether: '', message: '', 
      password: '',  verCode: '',  verBase: '', session: '', ok: false,
      options: [
        { text: ''},
        { text: '软件1701' },{ text: '软件1702' },{ text: '软件1703' },{ text: '软件1704' },{ text: '软件1705' },{ text: '软件1706' },{ text: '软件1707' },
        { text: '网络1701' },{ text: '网络1702' },{ text: '网络1703' },{ text: '网络1704' },{ text: '网络1705' },
        { text: '计科1701' },{ text: '计科1702' },{ text: '计科1703' },{ text: '计科1704' },{ text: '计科1705' },{ text: '计科1706' },{ text: '计科1707' }
      ],
      groups: [
        { text: ''},{ text: '办公室'},{ text: '宣传部'},{ text: '体育部'},{ text: '文艺部'},{ text: '组织部'},{ text: '青志'},{ text: '外联部'},{ text: '学习部'}
      ],
      whethers: [
        { text: '' },{ text: '是' },{ text: '否' }
      ]
    };
  },
  methods: {
    showTable: function () {
      if(!this.name){
        alert('请输入姓名');return;
      }if(!this.num){
        alert('请输入学号');return;
      }if(!this.tel){
        alert('请输入电话');return;
      }if(!this.iClass){
        alert('请选择班级');return;
      }if(!this.first){
        alert('请选择第一志愿');return;
      }if(!this.whether){
        alert('请选择是否服从调剂');return;}
      var nameRe = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
      var numRe = /^041\d{5}$/;
      var telRe = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
      if(!nameRe.test(this.name)){
        alert('请检查姓名');
        return;
      }if(!numRe.test(this.num)){
        alert('请检查学号');
        return;
      }if(!telRe.test(this.tel)){
        alert('请检查电话');
        return;
      }else{
        this.ok = true;
      }
    },
    closeTable: function () {
      this.ok = false;
    },
    getVer: function () {
      var that = this;
      $.ajax({
        url: "http://www.tjoe18.cn:2333/verCode",
        dataType: 'jsonp',
        success: function(data){
          that.verBase = data.result.verCode;
          that.session = data.result.session;
        }
      });
    },
    Add: function () {
      var that = this;
      var iData = {
        num: this.num, name: this.name,
        class: this.iClass, tel: this.tel,
        first: this.first, second: this.second,
        third: this.third, whether: this.whether,
        message: this.message,
      };
      $.ajax({
        url: "http://www.tjoe18.cn:2333/login",
        dataType: 'jsonp',
        data: {
          num: that.num,
          password: that.password,
          verCode: that.verCode,
          session: that.session
        },
        success: function(data){
          if(data.error){
            that.password = '';
            that.verCode = '';
            that.getVer();
            alert("报名失败 请检查输入");
          }else{
            $.ajax({
              url: "http://www.tjoe18.cn:2333/add",
              dataType: "jsonp",
              data: {newData: iData},
              success: function(data){
                if(data.error){
                  that.password = '';
                  that.verCode = '';
                  that.getVer();
                  alert("报名失败 请确认信息");
                }else if(data.result == 'add success'){
                  alert("报名成功!");
                  window.location.reload();
                }
              }
            });
          }
        }
      });
    }
  },

  mounted () {
    var that = this;
    var loginBtn = document.getElementById('btn');
    var body = document.getElementsByTagName('body')[0];
    var box = document.getElementById('join');
    var height = box.offsetHeight;
    var width = box.offsetWidth;
    body.style.height = height + "px";
    body.style.width = width + "px";
    console.log(height, width);
    setInterval(function(){
      loginBtn.setAttribute('class', 'animated pulse');
      setTimeout(function(){
        loginBtn.setAttribute('class', '');
      }, 800);
    }, 1200);
    var join = {
      getVer: function(that){
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
    join.getVer(that);
  }
}
