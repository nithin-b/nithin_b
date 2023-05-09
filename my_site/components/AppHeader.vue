<template>
  <div class="app_header">
    <div class="logo">
      <img src="../assets/images/youtube.png" width="50px" height="50px" />
    </div>
    <div class="nav_items">
      <ul></ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.app_header {
  position: sticky;
  top: 0%;
  z-index: 9999;
  width: 100%;
  background-color: #0a4d68;
}
</style>
