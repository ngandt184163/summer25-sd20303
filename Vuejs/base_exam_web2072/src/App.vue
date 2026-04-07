<script setup>
import Header from './components/blocks/Header.vue';
import Sidebar from './components/blocks/Sidebar.vue';
import Footer from './components/blocks/Footer.vue';
</script>

<template>
  <div class="d-flex flex-column vh-100">
    <Header />

    <div class="d-flex flex-grow-1">
      <Sidebar />

      <main class="flex-grow-1 p-4">
        <!-- RouterView dùng để hiển thị nội dung của router -->
        <RouterView />
      </main>
    </div>

    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>