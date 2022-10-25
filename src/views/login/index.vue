<!--
 * @Author: xyw
 * @Date: 2022-10-24 09:11:09
 * @LastEditors: xyw
 * @LastEditTime: 2022-10-24 09:20:31
 * @Description: 
 * @FilePath: \submission\src\views\login\index.vue
-->
<template>
  <div class="bg">
    <div class="title">DO Submission Excellence</div>
    <div class="loginBox tm-ai-center tm-jc-center">
      <div class="realBox">
        <div class="tm-mb-3">
          <a-input
            style="width: 320px"
            v-model:value="formInline.username"
            placeholder="User Name"
            disabled
          />
        </div>
        <div class="tm-mb-3">
          <a-input
            style="width: 320px"
            v-model:value="formInline.password"
            placeholder="Password"
            disabled
          />
        </div>
        <div class="tm-text-ct">
          <a-button @click="goLogin" style="width: 120px" type="primary"
            >Login</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

let formInline = ref({
  username: "",
  password: "",
});
const router = useRouter();
const goLogin = () => {
  router.push("/overview");
};
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/bg.jpeg");
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;

  .title {
    margin-top: 100px;
    font-size: 32px;
    text-align: center;
    color: #fff;
  }

  .loginBox {
    margin-top: 160px;
    width: 500px;
    height: 380px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.8;
  }
}
</style>
