<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

// khai bao bien kieu chuoi
const ten_mon = "VueJS";
const ma_mon = "WEB2072";
// khai bao bien kieu so
const so_tin_chi = 3;
const gv = "ngandt35";
// khai bao bien kieu boolean
const trang_thai = true;

const count = ref(0);
const increment = () => {
  count.value++;
  // count++;
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- cap nhat lai chuoi msg -->
      <HelloWorld msg="VUEJS" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <!-- kiem tra xem bootstrap da hoat dong chua -->
  <div id="app">
    <div class="container">
      <div class="alert">
        <h1 class="display-4">Hello, bootstrap!</h1>
      </div>
    </div>
  </div>

  <!-- in thong tin ra man hinh -->
  <div class="thong-tin-lop-hoc">
    <h2>Ten Mon: {{ ten_mon }}</h2>
    <h2>Ma mon: {{ ma_mon }}</h2>
    <h2>So tin chi: {{ so_tin_chi }}</h2>
    <h2>Giang vien: {{ gv }}</h2>
    <h2>Trang Thai: {{ trang_thai }}</h2>
  </div>
  <p>Count : {{ count }}</p>
  <button @click="increment()">Increment</button>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
