<template>
  <div class="container-fluid">
      <div class="cart-wrapper">
          <div class="home-block">
              <div class="row mt-3">
                  <div class="col-md-4">
                      <div class="home-block__search-city">
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
                                      <button type="submit" class="rounded-circle p-1 ml-3">OK</button>
                                  </div>
                              </div>
                          </form>
                      </div>

                      <div class="home-block__additional-info mt-4">
                          <h6>Дополнительная информация</h6>
                          <div class="header-block__name-city">
                              <span>Город:</span><span>{{ name }}</span>
                          </div>
                          <div class="header-block__temp">
                              <span>Темп.Max: </span><span>{{ temp_max }} </span>&#176;
                              <span>Темп.Min: </span><span>{{ temp_min }} </span>&#176;
                          </div>
                          <div class="header-block__humidity">
                              <span>Влажность: </span><span>{{ humidity }}</span>
                          </div>
                          <div class="home-block__pressure">
                              <span>Давление: </span><span>{{ pressure }}</span>
                          </div>
                          <div class="header-block__visibility">
                              <span>Видимость: </span><span>{{ visibility }}</span>
                          </div>
                          <div class="header-block__wind">
                              <span>Поворот ветра: </span><span>{{ wind_deg }}</span><br />
                              <span>Скрорость ветра: </span><span>{{ wind_speed }}</span>
                          </div>
                      </div>

                  </div>
                  <div class="col-md-8">
                      <div class="home-block__cards">

                          <cartCity
                             v-bind:arrResultFromData="pullState"
                             v-on:remove-cart="removeCart"
                             v-on:update-cart="updateCity"
                             v-on:add_info="additionalInfoCity"
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
            name: "",
            temp_max: "",
            temp_min: "",
            humidity: "",
            pressure: "",
            visibility: "",
            wind_deg: "",
            wind_speed: ""
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
            if(this.title !== "") {
                this.infoCity(this.title);
                this.title = "";
            }else {
                alert("Введите пожалуйста город");
            }
        },

        updateCity(name) {
            this.updateCart(name);
        },

        additionalInfoCity(obj) {
            this.name = obj.name;
            this.temp_max = Math.round(obj.main.temp_max - 273 );
            this.temp_min = Math.round(obj.main.temp_min - 273 );
            this.pressure = Math.round(obj.main.pressure * 0.00750063755419211*100 ) + "";
            this.humidity = obj.main.humidity + "%";
            this.visibility = obj.visibility/1000 + "км";
            this.wind_deg = obj.wind.deg;
            this.wind_speed = obj.wind.speed + "м/с";
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