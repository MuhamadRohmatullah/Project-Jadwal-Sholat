import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        jadwal: {}
    },
    getters: {
        getData(state) {
            return state.jadwal;
        }
    },
    actions: {
        getJadwal: async (context, payload) => {
            let bulan = new Date().getMonth();
            let cnt = 0;
            let wilayah = 'jakartapusat';

            if (payload == 'bandung') {
                wilayah = 'bandung';
            } else if (payload == 'surabaya') {
                wilayah = 'surabaya';
            } else if (payload == 'sukabumi') {
                wilayah = 'sukabumi';
            } else if (payload == 'denpasar') {
                wilayah = 'denpasar';
            } else if (payload == 'medan') {
                wilayah = 'medan';
            } else {
                wilayah = 'jakartapusat'
            }



            if (payload == 1) {
                cnt += 1;
                bulan - cnt;
            } else if (payload == 2) {
                bulan += 1;
            } else {
                bulan += 1;
            }
            if (bulan < 10) {
                bulan = '0' + bulan;

            }
            let tanggal = new Date().getFullYear() + '/' + bulan;
            let response = await axios.get('https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/' + wilayah + '/' + tanggal + '.json');

            context.commit('ADD_DATA', response.data);
        }
    },
    mutations: {
        ADD_DATA(state, payload) {
            let list = {
                imsyak: payload[new Date().getDate() - 1].imsyak,
                shubuh: payload[new Date().getDate() - 1].shubuh,
                terbit: payload[new Date().getDate() - 1].terbit,
                dhuha: payload[new Date().getDate() - 1].dhuha,
                dzuhur: payload[new Date().getDate() - 1].dzuhur,
                ashr: payload[new Date().getDate() - 1].ashr,
                magrib: payload[new Date().getDate() - 1].magrib,
                isya: payload[new Date().getDate() - 1].isya
            }
            state.jadwalPerhari = list,
                state.jadwal = payload;
        }
    }
})