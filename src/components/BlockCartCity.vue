<template>
    <div class="row mt-3">

        <div class="col-3" v-for="item in arrResultFromData" :key="item.id">
            <div class="home-block__cart text-center p-2">
                <div class="home-block__cart-city mt-4">
                    <p>
                        {{ item.name }}
                    </p>
                </div>
                <div class="home-block__cart-temp">
                    <p>
                        {{ Math.round(item.main.temp - 273 )}} &#176;
                    </p>
                </div>
                <div class="header-block__cart-clouds">
                    <p>
                       {{ item.weather[0].main }}
                    </p>
                </div>
                <div class="header-block__cart-button">
                    <p>
                        <button class="button"
                                v-on:click="$emit('remove-cart', item.name)"
                        >Update</button>
                    </p>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "BlockAdditionalCity.vue",
        data() {
            return {

            }
        },
        props: ["arrResultFromData"],

        methods: {

        }

    }
</script>

<style scoped>

.home-block__cart {
    border: 1px solid grey;
    border-radius: 0px 20px 0px 20px;
}

.home-block__cart > div{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.home-block__cart-city > p {
    width: 100px;
    position: relative;
    box-shadow: 0px 10px 10px -10px #539da5;

}
.header-block__close-cart > span {
    position: relative;
}

</style>