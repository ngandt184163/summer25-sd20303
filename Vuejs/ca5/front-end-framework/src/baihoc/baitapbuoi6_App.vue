<script setup>
import { ref } from "vue";
const name = ref("");
const checkbox = ref(false);
function submitForm() {
  console.log(name.value);
}
const multicheckbox = ref([]);
</script>

<template>
  <h1>Bai tap buoi 6</h1>
  <form @submit.prevent="submitForm">
    <br />
    ten: <input v-model="name" /> <br />
    <input type="checkbox" v-model="checkbox" />Dong y dieu khoan <br />
    Ma mon: <br />
    <input type="checkbox" value="HTML" v-model="multicheckbox" /> HTML <br />
    <input type="checkbox" value="CSS" v-model="multicheckbox" /> CSS <br />
    <input type="checkbox" value="PHP" v-model="multicheckbox" /> PHP <br />
    <button>Gui</button>
  </form>
  <p>{{ name }}</p>
  <p>{{ checkbox ? "True" : "False" }}</p>
  <p>{{ multicheckbox }}</p>
  <h1>PH42633</h1>
</template>
<style scoped></style>
