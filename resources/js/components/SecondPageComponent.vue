<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
       
      </div>
      <div class="col text-end">
       
      </div>
    </div>
    <div class="card mt-1 jadwalfull">
      <div class="row mt-1">
        <div class="col-7 col-lg-6 col-xl-6 text-end me-0">
          <h4 class="mt-1 me-0">Jadwal waktu shalat wilayah</h4>
        </div>
        <div class="col-3 col-lg-4 col-xl-4 text-start">
         
        </div>
      </div>
      <p class="text-center">
        {{ month[new Date(jadwal[0].tanggal).getMonth()] }}
        {{ today.getFullYear() }}
      </p>
    </div>

    <div class="card">
      <table class="table table-hover table-success">
        <thead>
          <tr class="fw-bold fs-5">
            <th scope="col">Tanggal</th>
            <th scope="col">Subuh</th>
            <th scope="col">Dzuhur</th>
            <th scope="col">Ashar</th>
            <th scope="col">Maghrib</th>
            <th scope="col">Isya</th>
          </tr>
        </thead>
        <tbody v-for="(element, index) in jadwal" :key="index">
          <tr>
            <td>{{ new Date(element.tanggal).toLocaleDateString("ID-id") }}</td>
            <td>{{ element.shubuh }} WIB</td>
            <td>{{ element.dzuhur }} WIB</td>
            <td>{{ element.ashr }} WIB</td>
            <td>{{ element.magrib }} WIB</td>
            <td>{{ element.isya }} WIB</td>
          </tr>
        </tbody>
      </table>
    </div>
  
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      today: new Date(),
      month: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
    };
  },
  methods: {
   
  },
  created() {
    this.$store.dispatch("getJadwal");
  },
  computed: {
    ...mapGetters({
      jadwal: "getData",
    }),
  },
};
</script>
<style>
.jadwalfull {
  background-color: #3aee8b;
}

.month {
  cursor: pointer;
}

.month:hover {
  color: #3aee8b;
}

#tohome {
  cursor: pointer;
}
#tohome:hover {
  color: #3aee8b;
}

#elb .form-select {
  width: 150px !important;
  background: #3aee8b;
  color: rgb(8, 8, 8);
}
</style>