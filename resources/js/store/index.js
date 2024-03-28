import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        jadwal: {},
        islam: {},
        jadwalPerhari: {},
        dateNow: "",
        surah: {},
        count: 0
    },
    getters: {
        getData(state) {
            return state.jadwal;
        },
        getHijriyah(state) {
            return state.islam;
        },
        getJadwalPerhari(state) {
            return state.jadwalPerhari;
        },
        getDateNow(state) {
            return state.dateNow;
        },
        getCaption(state) {
            return state.surah;
        },
        getCountDown(state) {
            return state.count;
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
        },
        getMasehi: async (context) => {

            let tanggal = new Date().toLocaleDateString('sv-SE').replace(/-/g, '/');
            let response = await axios.get('https://service.unisayogya.ac.id/kalender/api/masehi2hijriah/muhammadiyah/' + tanggal);
            context.commit('HIJRIYAH', response.data);
        },
        getSurah: async (context, payload) => {
            let obj = [
                {
                    surah: 17,
                    ayat: 77,
                    nama: "Al-Isra"
                },
                {
                    surah: 11,
                    ayat: 114,
                    nama: "Al-Hud"
                }
            ]
            let surah = null;
            let ayat = null;
            if (payload == 1) {
                surah = obj[1].surah;
                ayat = obj[1].ayat;
            } else {
                surah = obj[0].surah;
                ayat = obj[0].ayat;
            }
            let response = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/surat/' + surah + '/' + ayat);
            response.data['nama'] = obj[0].nama;
            if (payload == 1) {
                response.data['nama'] = obj[1].nama;
            }
            console.log(response.data);
            context.commit('SURAH', response.data);
        },
        getNow(context) {
            let formatIndonesia = new Intl.DateTimeFormat('id-ID', {
                year:
                    'numeric', month: '2-digit', day: '2-digit'
            })
                .format(new Date());

            context.commit('DATE_NOW', formatIndonesia);
        },
        getCount: async (context) => {
            let bulan = new Date().getMonth();
            bulan += 1;
            if (bulan < 10) {
                bulan = '0' + bulan;
            }
            let tanggal = new Date().getFullYear() + '/' + bulan;
            let response = await axios.get('https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/sukabumi/' + tanggal + '.json');

            context.commit('COUNT', response.data);
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
        },
        HIJRIYAH(state, payload) {
            // let hijriyah = {
            //     tanggal : payload[0].tanggal_hijriyah,
            //     bulan : payload[0].bulan_hijriyah,
            //     tahun : payload[0].tahun_hijriyah                
            // }
            state.islam = payload;
        },
        DATE_NOW(state, payload) {
            state.dateNow = payload;
        },
        SURAH(state, payload) {
            state.surah = payload
        },
        COUNT(state, payload) {
            var countDownDate = null;
            function time(sholat) {
                let waktu = payload[new Date().getDate() - 1].tanggal;
                // let obj = Object.values(payload[new Date().getDate()-1]);
                let arr = payload[new Date().getDate() - 1][sholat].split(":");
                let deadline = new Date(waktu);
                deadline.setHours(arr[0], arr[1]);

                return deadline.getTime();
            }

            if (time('shubuh') > new Date().getTime()) {
                countDownDate = time('shubuh');
            } else if (time('dzuhur') >= new Date().getTime()) {
                countDownDate = time('dzuhur');
            } else if (time('ashr') > new Date().getTime()) {
                countDownDate = time('ashr');
            } else if (time('magrib') > new Date().getTime()) {
                countDownDate = time('magrib');
            } else if (time('isya') > new Date().getTime()) {
                countDownDate = time('isya');
            } else {
                let waktu = payload[new Date().getDate()].tanggal;
                // let obj = Object.values(payload[new Date().getDate()-1]);
                let arr = payload[new Date().getDate()]['shubuh'].split(":");
                let deadline = new Date(waktu);
                deadline.setHours(arr[0], arr[1]);

                countDownDate = deadline.getTime();
            }
            // Update the count down every 1 second
            var x = setInterval(function () {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="countdown-demo"
                let timing = hours + " Jam "
                    + minutes + " Menit " + seconds + " Detik ";
                state.count = timing.replace(/-/g, '');
                // If the count down is over, write some text 
                if (distance < 0) {
                    //     clearInterval(x); 
                    location.reload()

                }
            }, 1000);
        }
    }
})