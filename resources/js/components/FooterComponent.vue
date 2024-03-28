<template>
  <div class="card mt-3 shadow-sm" id="footer">
    <div class="card-body text-center">
      <div class="row">
        <div class="col-1 me-0 ms-0 pt-6">
          <v-icon icon="mdi-chevron-left" size="30px" @click="ganti(2)" />
        </div>
        <div class="col">
          <blockquote class="blockquote">
            <p>{{ surah.ar }}</p>
            <br />
            <p>"{{ surah.id }}"</p>
            <br />
            <p>QS.{{ surah.nama }} : {{ surah.nomor }}</p>
          </blockquote>
        </div>
        <div class="col-1 me-0 ms-0 pt-6">
          <v-icon icon="mdi-chevron-right" size="30px" @click="ganti(1)" />
        </div>
      </div>
      <span>
        <v-icon icon="mdi-book-open-variant" />
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    ganti(no) {
      this.$store.dispatch("getSurah", no);
    },
  },
  computed: {
    ...mapGetters({
      surah: "getCaption",
    }),
  },
};
</script>
<style>
#footer {
  background-color: #24da76;
  color: white;
}
</style>