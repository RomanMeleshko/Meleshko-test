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
                          <form @submit.prevent="submit">
                              <div class="row pl-3">
                                  <div class="col-8 p-0">
                                      <div class="form-group">
                                              <input type="text" placeholder="город" v-model="title" class="form-control" id="city">
                                      </div>
                                  </div>
                                  <div class="col-4 p-0">
                                      <button type="submit" class="p-1 ml-1">Click</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-md-8">
                      <div class="home-block__cards">

                          <cartCity
                             v-bind:arrResultFromData="pullState"
                             v-on:remove-cart="removeCart"
                             v-on:update-cart="updateCity"
                          />

                      </div>
                  </div>
              </div>
          </div>


      </div>
  </div>

</template>

<script>
// @ is an alias to /src
import cartCity from "@/components/BlockCartCity.vue";
import { mapGetters, mapActions, mapMutations} from "vuex";

export default {
    name: 'Home',
    data() {
        return {
            title: "",
        }
    },
    computed: mapGetters(["pullState"]),

    methods: {
        ...mapActions(["infoWeather", "infoCity", "updateCart"]),
        ...mapMutations(["createNewCity", "deleteCity"]),

        removeCart(name) {

            this.deleteCity(name);

        },

        submit() {

            this.infoCity(this.title);

            this.title = "";

        },

        updateCity(name) {
            this.updateCart(name);

          //  alert(name);
        }
    },

    async mounted() {

        this.infoWeather();

    },

    components: {
       cartCity
    }
}
</script>

<style scoped>

    @import "../css/app.css";

</style>