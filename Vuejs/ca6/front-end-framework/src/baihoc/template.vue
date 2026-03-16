<script setup>
import { ref } from "vue";

const count = ref(0);

const diem = ref();
const show = ref(true);
const hienthi = () => {
  show.value = !show.value;
};
</script>

<template>
  <h1>template</h1>
  <p>PH59005</p>
  <p>{{ count }}</p>
  <button @click="count++">tang</button>
  <button @click="count--">giam</button>
  <input type="text" v-model="diem" />
  <p>PH59447</p>
  <p v-if="diem >= 8">gioi</p>
  <p v-else-if="diem >= 5">Kha</p>
  <p v-else>truot</p>
  <p>Ph41477</p>
  <button @click="hienthi()">Hien thi</button>
  <p v-show="show">Day la doan duoc hien thi</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
