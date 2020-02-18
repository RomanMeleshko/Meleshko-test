<template>
    <div class="additionalCity__choose-city border">
        <div class="row p-3">
            <div class="col">
                <div class="additionalCity__headline text-white">
                    <h5>You can choose any city</h5>
                    <p v-if="seen == true">
                        some text
                    </p>
                </div>
                <div class="additionalCity__search-block">
                    <div class="row justify-content-center mt-2">
                        <div class="col-6">
                            <div class="form-group m-0">
                                <input v-model="input_text" type="text" class="form-control" id="yourCity">
                            </div>
                        </div>
                        <div class="col-2 align-self-start m-0">
                            <div class="additionalCity__button">
                                <button class="but p-1 pl-4 pr-4 rounded text-white" v-on:click="act">{{ name }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="seen_2 == true" class="move_block">
            <p>move block</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlockChooseCity.vue",
        data() {
            return {
                seen: false,
                seen_2: false,
                input_text: "",
                name: "Added"
            }
        },

        methods: {
            act() {

              //  this.name = "bbb";

              // console.log(this.elem);

               this.frog();

            },

            frog() {
                this.seen = true;
                this.seen_2 = true;
                //alert(this.input_text);

                this.name = this.input_text;

            }



        }
    }



</script>


<style scoped>
.additionalCity__choose-city > .row {
    background: #338162;
    border-radius: 10px;
    transition: 1s;
    box-shadow: 0 0 10px #fcff9d,
                inset 0 0 0px #fff9ec;
}
.additionalCity__choose-city > .row:hover {
    box-shadow: 0 0 10px #fcff9d,
                inset 0 0 30px #fff9ec;
}
.additionalCity__button > button {
    outline: none;
    border: none;
    background: #498b28;
}
.additionalCity__button > button:hover {
    background: #96a29f;
}
.move_block {
    position: relative;
    width: 100px;
    height: 100px;
    background: red;
}
</style>