<script setup>
import Button from "@/components/Button.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonCouter from "@/components/ButtonCouter.vue";
import { ref } from "vue";
/**
 * 1. component: la cac phan giao
 * dien tach nho, co the tai sd
 * vd: navbar, footer, button,
 * form, ...
 * - trong du an vue thi App.vue
 * la root componet
 * - thanh phan
 * + script: chua logic
 * + template: chua giao dien
 * + style: chua css rieng.
 *
 * 3. props: la cach component cha
 * truyen du lieu vao component con
 * va nguoc lai, no giup cho component
 * con co the tuy bien voi cac gia
 * tri khac nhau (giong voi viec
 * truyen doi so vao ham)
 *
 * 4. emits: la cach component con
 * ban su kien len component cha va
 * cha se xu li
 * - la co che de con phat hien ra
 * su kien, cha lang nghe, sau do se
 * tuong tac va xu li ma khong can
 * chia se du lieu truc tiep
 */

const count = ref(0);
</script>
<template>
  <h1>Buoi 7</h1>
  <Button btn_text="button 1" :max="100" />
  <Button btn_text="button 2" />
  <HelloWorld msg="Xin chao" />
  <ButtonCouter @counter="count++" />
  <p>{{ count }}</p>
</template>
<style scoped></style>
