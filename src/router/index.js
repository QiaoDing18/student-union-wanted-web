import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head/Head.vue'
import All1 from '@/components/All/All1.vue'
import All2 from '@/components/All/All2.vue'
import All3 from '@/components/All/All3.vue'
import All4 from '@/components/All/All4.vue'
import Presidium from '@/components/Presidium/Presidium.vue'
import Join from '@/components/Join/Join.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        nameOfHead: Head,
        nameOfAll1: All1,
        nameOfAll2: All2,
        nameOfAll3: All3,
        nameOfAll4: All4,
        nameOfPresidium: Presidium,
        nameOfJoin: Join
      }
    }
  ]
})
