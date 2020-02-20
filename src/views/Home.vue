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

                          <cartCity
                             v-bind:arrResultFromData="resultData"
                             v-on:remove-cart="removeCart"
                          />


                      </div>
                  </div>
              </div>
          </div>


<!--      <p v-for="item in resultData" v-bind:key="item.id">{{ item.name }}</p>-->


      </div>
  </div>

</template>

<script>
// @ is an alias to /src

import cartCity from "@/components/BlockCartCity.vue";

export default {
    name: 'Home',
    data() {
        return {
            resultData: this.$store.getters.pullState
        }
    },

     mounted() {
         this.$store.dispatch("infoWeather");

    },

    methods: {

        removeCart(name) {

           this.resultData = this.resultData.filter(function(elem) {
                if(elem.name !== name) {
                   return true;
                }
                return false;
            })
        }

    },

    components: {
       cartCity
    }
}
</script>

<style scoped>

    @import "../css/app.css";

</style>