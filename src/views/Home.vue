<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @handelMsg="handelMsg"/>
    <div>
      <button @click="handelClick">handelClick</button>
      <ul>
        <li v-for="item in names" :key="item">{{ item }}</li>
      </ul>
      <div>{{ author }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; 
// @ is an alias to /src
// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class Home extends Vue {}

import { GetPosts } from '@/request/api'
import { onMounted, onUpdated, onUnmounted } from 'vue'
import { reactive, ref } from 'vue'

let author: string[] = ['mounted', 'title']
const names: object[] = reactive([])

 onMounted(() => {
  console.log('mounted!')
 
})

function handelClick() {
  GetPosts().then(res => {
    console.log('GetPosts!', res)
    res.data.forEach((element: any) => {
      names.push(element.title)
      author.push(element.author)
    })
    console.log('names', names)
  })
}

function handelMsg(e: any) {
  console.log('home handelMsg', e)
}
</script>
