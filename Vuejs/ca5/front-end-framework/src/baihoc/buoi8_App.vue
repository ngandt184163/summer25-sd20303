<script setup>
import ChildComponent from "@/components/ChildComponent.vue";
import NamedSlot from "@/components/NamedSlot.vue";
import { ref, provide } from "vue";
/**
 * 1. Slot: dung de truyen HTML
 * (noi dung) tu cha vao con
 * 2. Named Slot: dung de truyen
 * noi dung tu cha vao con trong
 * truong hop con co nhieu slot
 * 3. Scoped Slot: dung de truyen
 * du lieu tu con len cha.
 * 4. Dynamic Slot: la Named slot
 * thay doi theo bien
 * 5. Provide / Inject: dung de
 * truyen du lieu nhieu cap tu
 * cha xuong con
 */

const slotName = ref("sp3");
function changeSlotName(name) {
  slotName.value = name;
}

// muon truyen bien msg xuong component con
// va chau,..... (nhieu cap)
const msg = ref("Xin chao cac con, cac chau");
provide("message", msg);
</script>
<template>
  <h1>Buoi 8</h1>
  <ChildComponent v-slot="{ msg }">
    <h5>Hom nay la thu Nam</h5>
    <p>{{ msg }}</p>
  </ChildComponent>
  <NamedSlot>
    <template v-slot:sp1>
      <p>San Pham 1</p>
      <i>Gia: 30000vnd</i>
    </template>
    <template v-slot:sp2>
      <p>San Pham 2</p>
    </template>
    <template v-slot:sp3>
      <p>San Pham 3</p>
    </template>
  </NamedSlot>
  <NamedSlot>
    <template v-slot:[slotName]>
      <p>San Pham {{ slotName }}</p>
    </template>
  </NamedSlot>
  <button @click="changeSlotName('sp1')">Hien thi SP1</button>
  <button @click="changeSlotName('sp2')">Hien thi Sp2</button>
  <button @click="changeSlotName('sp3')">Hien thi Sp3</button>
</template>
<style scoped></style>
