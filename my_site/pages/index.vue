<template>
  <div class="main_page">
    <el-row :gutter="10">
      <el-col :span="8" style="margin-top: 10rem"> </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <el-form
            :label-position="labelPosition"
            label-width="100px"
            style="max-width: 460px"
          >
            <el-form-item
              prop="email"
              label="Email"
              :rules="[
                {
                  type: 'email',
                  message: 'Please input correct email address',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="creds.email" />
            </el-form-item>

            <el-form-item label="Password" prop="pass">
              <el-input
                v-model="creds.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            <el-button type="success" @click="registerUser()"
              >Register</el-button
            >
            <el-button type="danger">Clear</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <!-- <div>
      <carousel />
    </div>
    <div class="main_section_content">
      <h1>About me....</h1>
    </div> -->
  </div>
</template>


<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
const labelPosition = ref("top");

// const items = ref([
//   { value: "Item 1" },
//   { value: "Item 2" },
//   { value: "Item 3" },
// ]);

// Accessing of the ref([]) items
// console.log(items.value[0].value);

const creds = reactive({
  email: "",
  password: "",
});

const nuxtApp = useNuxtApp();
async function registerUser() {
  try {
    console.log("Register");
    console.log(creds.email);
    console.log(creds.password);
    const { user } = await createUserWithEmailAndPassword(
      nuxtApp.$auth as any,
      creds.email,
      creds.password
    );

    console.log(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // handle error
    }
  }
}
</script>

<style>
.main_section_content {
  /* width: 100%;
  height: 100vh; */
  background-image: url("../assets/images/moon.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.9;
}
</style>
<style  >
.box-card {
  margin-top: 10rem;
}
</style>
