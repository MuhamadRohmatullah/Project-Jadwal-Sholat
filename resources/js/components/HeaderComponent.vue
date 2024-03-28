<template>
  <nav class="navbar bg-body-tertiary shadow-sm sticky-top" id="navigasi">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-3" @click="goToHome()" id="brand"
        ><v-icon icon="$vuetify" /> Netepan
      </a>
    
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
<style>
#brand {
  font-family: "Sriracha", cursive;
}

#navigasi {
  background-color: #24da76 !important;
}

span,
#brand {
  cursor: pointer;
}

</style>