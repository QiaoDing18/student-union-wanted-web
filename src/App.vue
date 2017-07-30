<template>
  <div id="app" class="swiper-container">
    <div class="swiper-wrapper">
      <router-view name="nameOfHead" class="swiper-slide"></router-view>
      <router-view name="nameOfAll1" class="swiper-slide"></router-view>
      <router-view name="nameOfAll2" class="swiper-slide"></router-view>
      <router-view name="nameOfAll3" class="swiper-slide"></router-view>
      <router-view name="nameOfAll4" class="swiper-slide"></router-view>
      <router-view name="nameOfPresidium" class="swiper-slide"></router-view>
      <router-view name="nameOfJoin" class="swiper-slide"></router-view>
    </div>
  </div>
</template>

<script src='./components/App/app.js'></script>
