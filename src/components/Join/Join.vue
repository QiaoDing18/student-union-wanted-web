<template>
  <div id="join">
    <div class="join-1">
      <input type="text" id="name">
      <select id="class">
        <option value=""></option>
        <option value="">软件1701</option>
        <option value="">软件1702</option>
        <option value="">软件1703</option>
        <option value="">软件1704</option>
        <option value="">软件1705</option>
        <option value="">软件1706</option>
        <option value="">软件1707</option>
        <option value="">网络1701</option>
        <option value="">网络1702</option>
        <option value="">网络1703</option>
        <option value="">网络1704</option>
        <option value="">网络1705</option>
        <option value="">计科1701</option>
        <option value="">计科1702</option>
        <option value="">计科1703</option>
        <option value="">计科1704</option>
        <option value="">计科1705</option>
        <option value="">计科1706</option>
        <option value="">计科1707</option>
      </select>
      <input type="text" id="num">
      <input type="text" id="tel">
    </div>

    <div class="join-2">
      <select id="first">
        <option value=""></option>
        <option value="">办公室</option>
        <option value="">宣传部</option>
        <option value="">体育部</option>
        <option value="">文艺部</option>
        <option value="">组织部</option>
        <option value="">青志</option>
        <option value="">外联部</option>
        <option value="">学习部</option>
      </select>
      <select id="second">
        <option value=""></option>
        <option value="">办公室</option>
        <option value="">宣传部</option>
        <option value="">体育部</option>
        <option value="">文艺部</option>
        <option value="">组织部</option>
        <option value="">青志</option>
        <option value="">外联部</option>
        <option value="">学习部</option>
      </select>
      <select id="third">
        <option value=""></option>
        <option value="">办公室</option>
        <option value="">宣传部</option>
        <option value="">体育部</option>
        <option value="">文艺部</option>
        <option value="">组织部</option>
        <option value="">青志</option>
        <option value="">外联部</option>
        <option value="">学习部</option>
      </select>
      <select id="whether">
        <option value=""></option>
        <option value="">&nbsp;&nbsp;&nbsp;是</option>
        <option value="">&nbsp;&nbsp;&nbsp;否</option>
      </select>
    </div>

    <img id="btn" src="./../../assets/join/join4.png" alt="">

    <div class="join-3">
      <textarea id="message" cols="30" rows="10"></textarea>
    </div>
    
    <div id="back" style="display:none;"></div>
    <div id="table" style="display:none;">
      <input id="numInput" type="text" readonly="readonly">
      <input id="password" type="password" placeholder="教务系统密码">
      <input id="verCode" type="text" placeholder="请输入验证码">
      <img id="verPic" alt="">
      <img id="btnGo" src="./../../assets/login/btn.png" alt="">
    </div>
  </div>
</template>

<style scoped lang='less' src="./Join.less"></style>

<script src="./Join.js"></script>