<template>
  <div class="footer_section">footer Section</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.footer_section {
  position: fixed;
  bottom: 0px;
  background-color: rgb(74, 74, 74);
  width: 100%;
  height: 15vh;
  color: rgb(255, 255, 255);
}
.flex-grow {
  flex-grow: 1;
}
</style>
