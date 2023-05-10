<template>
  <div>
    <label>File Upload</label>
    <input type="file" @change="onFileChage" />
    <span><button>Upload</button></span>
  </div>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
const onFileChage = async (e: any) => {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  const { snapshot, downLoadUrl, metadata }: any = await upoadFile(files[0]);
};
</script>
