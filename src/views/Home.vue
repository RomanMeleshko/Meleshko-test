<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods: {
    axios.get("http://openweathermap.org/.")
    .then((response) => {

     }).catch(error => {
         console.log("error");
            })
  },
  components: {

  }
}
</script>
