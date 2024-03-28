<template>
  <div class="container-fluid">
    <div class="card pt-2" id="body-top">
      <div class="row mt-1">
        <div class="col-7 col-lg-6 col-xl-7 text-end me-0">
          <h1 class="text-end">Jadwal Sholat Hari ini</h1>
        </div>
        <div class="col-3 col-lg-4 col-xl-4 text-start">
          <select-wilayah id="ela" />
        </div>
      </div>
      <span class="text-center fw-bold">{{ dateNow }}</span>
      <p class="text-center">
        <v-icon icon="mdi-clock" class="icon" />{{ dateTime.hours }}:{{
          dateTime.minutes
        }}:{{ dateTime.seconds }} WIB
      </p>
      
    </div>

    <div class="row">
      <div class="col-sm-12 col-lg-6 col-xl-4">
        <div class="card mt-2 shadow-sm pt-2" id="jam">
          <div class="text-center">
            <v-icon icon="mdi-calendar" class="icon" />
            <h4>
              
            </h4>
          </div>
        </div>
      </div>
      <div
      >
        <div class="card mt-2 shadow-sm" id="jam">
          <div class="waktu text-center my-2">
            <v-icon icon="mdi-timer" class="icon" />
            <h4></h4>
            <h4>WIB</h4>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import { mapGetters } from "vuex";
const date = new Date();
export default {
  data() {
    return {
      today: new Date(),
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
    };
  },
  methods: {
   
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  computed: {
    ...mapGetters({
      dateNow: "getDateNow",
    }),
  },
  created() {
   
  },
};
</script>
<style>
.card {
  border-radius: 0;
}

#jam {
  cursor: pointer;
  height: 120px;
}

.waktu {
  height: auto;
}

#body-top,
#jam,
#hijriyah {
  background-color: #ffffff;
  color: rgb(24, 22, 22);
}

#hijriyah {
  height: 120px;
}

#expand {
  cursor: pointer;
}

#expand:hover {
  color: #3aee8b;
}

.icon {
  color: #3aee8b;
}

#ela .form-select {
  width: 150px !important;
  color: rgb(8, 8, 8);
}
</style>