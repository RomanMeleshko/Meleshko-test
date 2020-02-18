<template>
  <div class="container-fluid">
      <div class="cart-wrapper">
          <div class="home-block">
              <div class="row mt-3">
                  <div class="col-md-4">
                      <div class="home-block__search-city p-3">
                          <div>
                              <label for="city">Введите название города</label>
                          </div>
                          <div class="row pl-3">
                              <div class="col-8 p-0">
                                  <div class="form-group">
                                      <input type="text" class="form-control" id="city">
                                  </div>
                              </div>
                              <div class="col-4 p-0">
                                  <button class="p-1 ml-1">Click</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-8">
                      <div class="home-block__cards">
                          <div class="row mt-3">

                              <div class="col-3" v-for="item in resultData" :key="item.id">
                                  <div class="home-block__cart text-center p-2">
                                      <div class="home-block__cart-city mt-4">
                                          <p>
                                             {{ item.name }}
                                          </p>
                                      </div>
                                      <div class="home-block__cart-temp">
                                          <p>
                                              {{ Math.round(item.main.temp - 273) }} &#176;
                                          </p>
                                      </div>
                                      <div class="header-block__cart-clouds">
                                          <p>
                                              {{ item.weather[0].main }}
                                          </p>
                                      </div>
                                      <div class="header-block__cart-button">
                                          <p>
                                              <button v-on:click="update">Update</button>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>

      <p>{{ gettingAllData() }}</p>
<!--      <p v-for="item in resultData" v-bind:key="item.id">{{ item.name }}</p>-->


      </div>
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
// import BlockChooseCity from "@/components/BlockChooseCity.vue";
// import BlockCartCity from "@/components/BlockCartCity.vue";

//import axios from "axios";

export default {
    name: 'Home',
    data() {
        return {
            resultData: [],
            city: "",
            temp: "",
            clouds: ""
        }
    },

     mounted() {
         this.$store.dispatch("infoWeather");
    },

    computed: {


    },

    methods: {

        gettingAllData() {
            //  return this.$store.getters.pullState;
            this.resultData = this.$store.getters.pullState;

            console.log(this.resultData);
         //   this.settingValue();
        },

        settingValue() {

            this.city = this.resultData.name;
            this.temp = Math.round(this.resultData.main.temp - 273);
            this.clouds = this.resultData.weather[0].main;

        },

        update() {
            this.$store.dispatch("infoWeather");
        }
    },

    components: {
      // BlockChooseCity,
      // BlockCartCity
    }
}
</script>

<style scoped>

    @import "../css/app.css";

</style>