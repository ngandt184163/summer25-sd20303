<script setup>
import Chirld from "@/components/Chirld.vue";
import NamedSlot from "@/components/NamedSlot.vue";
import { ref, provide } from "vue";
/**
 * 1. slot: giup truyen noi dung
 * (html) tu cha xuong con
 * 2. Named Slot: dung de truyen
 * noi dung tu cha xuong con theo
 * ten (trong truong hop co nhieu
 * hon mot slot xuat hien trong con)
 * - co the them nhieu the cung luc
 *
 * 3. Scoped Slot: dung de truyen
 * du lieu tu con -> cha
 *
 * 4. Dynamic Slot: la Named slot
 * thay doi theo bien, chu khong
 * goi co dinh
 *
 * 5. Provide / Inject: dung de
 * truyen du lieu nhieu cap tu
 * cha xuong con
 */

const slotName = ref("sp3");
function changeSlotName(name) {
  slotName.value = name;
}

const message = ref("Day la cha");
provide("message", message);
</script>
<template>
  <h1>Buoi 8</h1>
  <!-- truyen nd cho slot o con -->
  <Chirld v-slot="{ msg }">
    <b>day la component Chirld</b>
    <p>{{ msg }}</p>
  </Chirld>
  <NamedSlot>
    <template v-slot:sp1>
      <b>San pham 1</b><br />
      <i>San pham nay khong phai la thuoc</i><br />
    </template>
    <template v-slot:sp2> <b>San pham 2</b><br /> </template>
    <template v-slot:sp3> <b>San pham 3</b><br /> </template>
  </NamedSlot>

  <NamedSlot>
    <template v-slot:[slotName]>
      <b>San pham {{ slotName }}</b
      ><br />
    </template>
  </NamedSlot>
  <button @click="changeSlotName('sp1')">Hien thi sp1</button>
  <button @click="changeSlotName('sp2')">Hien thi sp2</button>
  <button @click="changeSlotName('sp3')">Hien thi sp3</button>
</template>
<style scoped></style>
