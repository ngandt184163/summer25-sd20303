<template>
  <div class="bg-light border-end h-100 p-3 sidebar">
    <h5 class="text-primary fw-bold mb-3">Menu</h5>

    <ul class="nav flex-column">
      <li class="nav-item mb-2">
        <router-link class="nav-link" :to="{ name: 'home' }">Quy chế thi</router-link>
        <router-link class="nav-link" :to="{ name: 'list' }">Danh sách sinh viên</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 220px;
}
</style>
