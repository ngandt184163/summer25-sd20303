<script setup>
import { ref } from "vue";
/**
 * 1.form binding: la lien ket du
 * lieu giua the input va bien
 * - sd v-model
 */
const name = ref("");
const discription = ref("");
const checkbox = ref(false);
const multi_checkbox = ref([]);
const gender = ref("");
const address = ref("");
</script>
<template>
  <h1>Buoi 6</h1>
  <form>
    Ten: <input v-model.lazy.number.trim="name" /><br />
    Mo ta: <textarea v-model="discription"></textarea><br />
    Ghi nho toi: <input type="checkbox" v-model="checkbox" /><br />
    So thich: <br />
    <input type="checkbox" value="boi loi" v-model="multi_checkbox" />boi loi
    <br />
    <input type="checkbox" value="da bong" v-model="multi_checkbox" />da bong
    <br />
    <input type="checkbox" value="cau long" v-model="multi_checkbox" />cau long
    <br />
    <input type="checkbox" value="choi game" v-model="multi_checkbox" />choi
    game <br />
    Gioi tinh: <br />
    <input type="radio" value="Nam" v-model="gender" />Nam <br />
    <input type="radio" value="Nu" v-model="gender" />Nu <br />
    Que quan: <br />
    <select v-model="address">
      <option disabled="true" value="">Chon Tinh</option>
      <option value="Ha Noi">Ha Noi</option>
      <option value="Ha Giang">Ha Giang</option>
      <option value="Ha Nam">Ha Nam</option>
      <option value="Ha Tinh">Ha Tinh</option>
    </select>
    <button>Gui</button>
  </form>
  <p>{{ name }} - {{ name.length }} - {{ typeof name }}</p>
  <p>{{ discription }}</p>
  <p>{{ checkbox ? "Da chon" : "Chua chon" }}</p>
  <p v-for="item in multi_checkbox">{{ item }}</p>
  <p>{{ gender }}</p>
</template>
<style scoped></style>
