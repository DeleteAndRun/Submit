<template>
  <a-layout class="tm-transition">
    <a-layout-sider width="230px" theme="light" v-model:collapsed="collapsed" collapsible :trigger="null"><side-bar v-model:collapsed="collapsed" /></a-layout-sider>
    <a-layout :class="collapsed ? 'hide' : 'show'">
      <a-layout-header><Header v-model:collapsed="collapsed" /></a-layout-header>
      <a-layout-content class="tm-p-1 tm-scrollbar">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import SideBar from './sidebar.vue'
import Header from './header.vue'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'

let collapsed = ref(false)
const route = useRoute()
const router = useRouter()
</script>

<style lang="less" scoped>
.ant-layout {
  min-height: 100vh;
  &.show {
    padding-left: 230px;
    overflow-x: hidden;
  }
  &.hide {
    padding-left: 80px;
    overflow-x: hidden;
  }
  .ant-layout-sider {
    position: fixed;
    z-index: 10;
    min-height: 100vh;
  }
  .ant-layout-header {
    background: #1966ff;
    height: 50px;
    padding: 0;
  }
  .ant-layout-content {
    min-width: 1100px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      // width: 0px;
    }
  }
  .ant-breadcrumb {
    height: 49px;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 12px 24px;
    .navigator {
      &:hover {
        color: @common-color-hover;
      }
    }
  }
}
</style>
