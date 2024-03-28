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
      <span class="text-center fw-bold"></span>
      <p class="text-center">
       
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
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>


export default {
  data() {
    return {
      
    };
  },
  methods: {
   
  }
};
</script>
<style>
.card {
  border-radius: 0;
}


</style>