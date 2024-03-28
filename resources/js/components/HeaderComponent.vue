<template>
  <nav class="navbar bg-body-tertiary shadow-sm sticky-top" id="navigasi">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-3" @click="goToHome()" id="brand"
        ><v-icon icon="$vuetify" /> Netepan
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body fs-5">
          <ul style="list-style: none">
            <li><h4 class="mt-4">Menu</h4></li>
            <li class="fw-bold" @click="goToHome()">
              <span><v-icon icon="mdi-home" size="20px" />Beranda</span>
            </li>
            <li class="mt-2 fw-bold" @click="goToDetail()">
              <span
                ><v-icon icon="mdi-calendar-multiple" size="20px" /> Jadwal
                Lengkap</span
              >
            </li>
            <li><h4 class="mt-5">Contact</h4></li>
            <li>
              <span
                ><v-icon icon="mdi-email" size="20px" /><a
                  style="text-decoration: none; color: inherit"
                  href="mailto:m.rohmatullah10@gmail.com"
                  >m.rohmatullah10@gmail.com</a
                ></span
              >
            </li>
            <li>
              <span
                ><v-icon icon="mdi-phone" size="20px" /><a
                  style="text-decoration: none; color: inherit"
                  href="https://wa.me/6283891381790"
                  >+62 Phone (click)</a
                ></span
              >
            </li>
            <!-- <li><span><v-icon icon="mdi-web" size="20px"/> www.Rohmatullah.my.id</span></li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToDetail() {
      this.$router.push({ name: "second" });
    },
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

#offcanvasScrolling {
  background-color: #fcfcfc;
  color: #050505;
}

li:hover {
  color: #24da76;
}
</style>