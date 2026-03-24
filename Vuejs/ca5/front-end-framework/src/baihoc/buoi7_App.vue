<script setup>
import Button from "@/components/Button.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonCounter from "@/components/ButtonCounter.vue";
import { ref } from "vue";
/**
 * 1. component la: cac phan giao
 * dien nho co the tai su dung
 * - vd navbar, button, card san pham,
 * form, sidebar, ...
 * - App.vue la root component
 * - component co 3 thanh phan
 * + script: noi chua logic
 * + template: noi chua giao dien
 * + style: noi chua css rieng
 *
 * 2. props : truyen du lieu tu cha
 * xuong con
 *
 * 3. emits(con - cha): component
 * con ban su kien len component cha
 */
const count = ref(0);
</script>
<template>
  <h1>buoi 7</h1>
  <Button btn_text="counter 1" :number1="100" />
  <Button btn_text="counter 2" />
  <HelloWorld msg="xin chao" />
  <ButtonCounter @counter="count++" />
  <p>{{ count }}</p>
</template>
<style scoped></style>
