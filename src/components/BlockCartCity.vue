<template>
    <div class="col-4">
        <div class="additionalCity__info-city">
            <div class="row justify-content-end">
                <div class="col-3 pr-2">
                    <div class="additionalCity__close">
                        <p>
                            X
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="additionalCity__name-city">
                        <p>
                            {{ getting }}
                        </p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="additionalCity__temperature">
                        <p>
                            -10%
                        </p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="additionalCity__button__info">
                        <p>
                            {{ getting }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="additionalCity__button pt-4">
                       <button v-on:click="updateData" class="w-75 rounded text-white">
                           Update
                       </button>
                    </div>
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
                nameCity: "",
                temperature: "",
                info: ""
            }
        },
        computed: {
            getting() {
                return this.$store.getters.allInfo;
            }
        },
        methods: {
            updateData() {
                this.nameCity = "Lviv";
            }
        }

    }
</script>

<style scoped>
.additionalCity__info-city {
    height: 250px;
    background: #fff9ec;
    border-radius: 10px;
    position: relative;
    border: 2px solid #5d615b;
    box-shadow: 3px 3px 10px #404033;
}
.additionalCity__button > button {
    outline: none;
    border: none;
    background: #498b28;
}
.additionalCity__button > button:hover {
    background: #42b983;
}
</style>