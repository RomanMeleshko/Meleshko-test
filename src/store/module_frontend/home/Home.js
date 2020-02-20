//import axios from "axios";

export default {
    state: {
        result: "",
    },
    actions: {
        infoWeather: async function(context) {
            let key = "cdadd613c8d4235e8a72fca5c38c7009";
            let city = ["Kiev", "London", "Lviv", "Kharkiv"];
            let res;
            let data;
            let arr = [];

            for(var i = 0; i < city.length; i++) {
                res = await fetch(
                    "http://api.openweathermap.org/data/2.5/weather?q=" + city[i] +"&appid=" + key
                )

                data = await res.json();

                arr.push(data);
            }

            //const data = await res.json();

            context.commit("updateInfo", arr);

        }
    },
    mutations: {
        updateInfo(state, arr) {
            state.result = arr;
        }
    },
    getters: {

        pullState(state) {
            return state.result;
        }

    }
}