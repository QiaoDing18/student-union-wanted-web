<template>
  <div id="join">
    <div class="join-1" id="test">
      <input type="text" id="name" v-model="name">
      <select id="class" v-model="iClass">
        <option v-for="option in options">
        {{ option.text }}
        </option>
      </select>
      <input type="text" id="num" v-model="num">
      <input type="text" id="tel" v-model="tel">
    </div>

    <div class="join-2">
      <select id="first" v-model="first">
        <option v-for="group in groups">
          {{ group.text }}
        </option>
      </select>
      <select id="second" v-model="second">
        <option v-for="group in groups">
          {{ group.text }}
        </option>
      </select>
      <select id="third" v-model="third">
        <option v-for="group in groups">
          {{ group.text }}
        </option>
      </select>
      <select id="whether" v-model="whether">
        <option v-for="whether in whethers">
          {{ whether.text }}
        </option>
      </select>
    </div>
    
    <!-- 登录窗按钮 -->
    <img id="btn" v-on:click="showTable()" src="./../../assets/join/join4.png" alt="">

    <div class="join-3">
      <textarea id="message" cols="30" rows="10" v-model="message"></textarea>
    </div>
    
    <div v-show="ok" id="back" v-on:click="closeTable()"></div>
    <div v-show="ok" id="table">
      <input id="numInput" type="text" readonly="readonly" v-bind:value=num>
      <input id="password" type="password" placeholder="教务系统密码" v-model="password">
      <input id="verCode" type="text" placeholder="请输入验证码" v-model="verCode">
      <img id="verPic" v-on:click="getVer()" v-bind:src=verBase alt="">
      <img id="btnGo" v-on:click="Add()" src="./../../assets/login/btn.png" alt="">
    </div>
  </div>
</template>

<style scoped lang='less' src="./Join.less"></style>

<script src="./Join.js"></script>
