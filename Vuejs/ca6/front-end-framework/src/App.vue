<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

// khai bao bien kieu chuoi
const ten_mon = "Vue.js";
const ma_mon = "WEB2072";
// khai bao bien kieu so
const tin_chi = 3;
// khai bao kieu boolean
const trang_thai = true;
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- thay đổi nội dung hiển thị -->
      <HelloWorld msg="Frontend Framework" />
    </div>
  </header>

  <main>
    <TheWelcome />

    <!-- kiem tra xem bootstrap da hoat dong hay chua -->
    <div id="app">
      <div class="container">
        <div class="alert">
          <h1 class="display-4">Hello, bootstrap!</h1>
        </div>
      </div>
    </div>

    <!-- in thong tin ra trinh duyet -->
    <div class="info">
      <h1>Thong tin lop hoc</h1>
      <h2>ten mon: {{ ten_mon }}</h2>
      <h2>ma mon: {{ ma_mon }}</h2>
      <h2>tin chi: {{ tin_chi }}</h2>
      <h2>trang thai: {{ trang_thai }}</h2>
    </div>
  </main>
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
