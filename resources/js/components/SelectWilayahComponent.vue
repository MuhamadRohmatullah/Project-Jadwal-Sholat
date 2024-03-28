<template>
  <span @click="getWilayah()">
    <select
      class="form-select form-select-sm fs-5 shadow-sm"
      aria-label="Small select example"
      v-model="wilayah"
    >
      <option value="jakartapusat" selected>Jakarta</option>
      <option value="sukabumi">Sukabumi</option>
      <option value="bandung">Bandung</option>
      <option value="surabaya">Surabaya</option>
      <option value="denpasar">Denpasar</option>
      <option value="medan">Medan</option>
    </select>
  </span>
</template>
<script>
export default {
  data() {
    return {
      wilayah: "jakartapusat",
      id: "",
    };
  },
  methods: {
    getWilayah() {
      this.$store.dispatch("getJadwal", this.wilayah);
    },
  },
};
</script>