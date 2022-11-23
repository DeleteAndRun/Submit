
<template>
  <div class="head h-100 tm-flex tm-jc-between">
    <div class="tm-ai-center">
      <!-- <MenuUnfoldOutlined class="icon" v-if="props.collapsed" @click="changeCollapsed" />
      <MenuFoldOutlined class="icon" v-else @click="changeCollapsed" /> -->
    </div>
    <div class="tm-flex tm-ai-center  tm-text-white tm-mr-5">
      <div class="tm-cursor">Data Operation</div>
      <a-dropdown class="dropdown_box" >
        <div class="tm-cursor">
          <div class="avatar_box tm-ml-3">
            <UserOutlined />
          </div>
        </div>
        <template #overlay>     
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})


const emits = defineEmits(['update:collapsed'])

const changeCollapsed = () => {
  emits('update:collapsed', !props.collapsed)
}
</script>

<style lang="less" scoped>
.head {
  // line-height: 50px;
  .icon {
    color: #fff;
    font-size: 20px;
  }
}
.dropdown_box {
  display: flex;
  align-items: center;
  .avatar_box {
    cursor: pointer;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .svg-icon {
      width: 32px;
      height: 32px;
      border: 1px solid #fafafa;
      border-radius: 50%;
    }
  }
  .users_box {
    min-width: 100px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    height: 44px;
    margin-right: 8px;
    .user {
      width: 100%;
      height: 50%;
      position: relative;
      display: flex;
      align-items: center;
    }
  }
  .down_icon {
    display: inline-block;
    line-height: 64px;
    padding-top: 4px;
    margin-left: 10px;
  }
}

:deep(.svg-icon) {
  &.super {
    display: inline-block;
    width: 58px !important;
    height: 14px !important;
    margin-left: 8px;
  }
  &.manger {
    display: inline-block;
    width: 38px !important;
    height: 14px !important;
    margin-left: 8px;
  }
  &.member {
    display: inline-block;
    width: 28px !important;
    height: 14px !important;
    margin-left: 8px;
  }
}

.drop-box {
  width: 240px;
  height: 44px;
  // line-height: 37px;
  border-bottom: 1px solid #eee;
  color: #333;
  background: #fff;
  font-size: 14px;
  padding-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
  .borders {
    width: 2px;
    color: #fff;
    line-height: 44px;
    position: absolute;
    left: 0;
    top: 17px;
    height: 15px;
  }
  &:hover {
    background: #f5f8fe;
    color: #1966ff;
    .borders {
      background: #1966ff;
    }
  }
}

:deep(.submenu) {
  border: 1px solid #eee;
  border-bottom: none;
}
:deep(.ant-dropdown-menu-title-content) {
  display: flex;
}
:deep(.ant-scroll-number) {
  // top: -4px;
  // right: 3px;
}
:deep(.ant-dropdown-menu-item) {
  height: 44px;
  line-height: 34px;
  color: #333;
  &:hover {
    background: rgba(25, 102, 255, 0.04);
  }
  &:nth-child(1) {
    display: flex;
    background-size: 100% 100%;
    padding-right: none;
    &.FirstMenuItem {
      height: 60px;
      background: url('../assets/images/common/back.png') no-repeat;
    }
  }
}
:deep(.ant-dropdown-menu-item-active) {
  background: rgba(25, 102, 255, 0.04);
}
:deep(.submenu .ant-dropdown-menu-submenu) {
  display: flex;
  flex-wrap: nowrap;
}

:deep(.ant-dropdown-menu-submenu-title) {
  height: 44px !important;
  line-height: 34px !important;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;

  &:hover {
    background: rgba(25, 102, 255, 0.04);
  }
}
:deep(.ant-dropdown-menu-submenu-popup) {
  width: 240px;
  height: 100%;
  margin-left: -165px;
}
</style>

<style lang="less">
.team {
  ul {
    max-height: 700px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>
