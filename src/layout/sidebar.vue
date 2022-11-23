<template>
  <div class="logo tm-flex tm-ai-center tm-transition tm-cursor">
    <div v-show="!props.collapsed" class="tm-text-white tm-fs-xxl">DO Submission Excellence</div>
  </div>
  <div class="menuBox">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
    >
      <template v-for="item in routes">
        <!-- 是否显示菜单 -->
        <template v-if="!item.meta.hidden">
          <!-- 有子菜单 -->
          <template v-if="item.children">
            <template v-if="item.children.length > 1">
              <a-sub-menu :key="item.path">
                <template #icon> </template>
                <template #title>
                  <span>{{ item.meta.title }}</span>
                </template>
                <template v-for="child in item.children">
                  <template v-if="!child.meta.hidden">
                    <a-menu-item
                      @click="router.push(child.path)"
                      :key="child.path"
                    >
                      <span
                        class="tm-relative"
                        :class="{ menuClassName: child.meta.isNew }"
                        >{{ child.meta.title }}</span
                      >
                    </a-menu-item>
                  </template>
                </template>
              </a-sub-menu>
            </template>
            <!-- 子菜单只有一个 则显示为一级菜单 -->
            <template v-else>
              <a-menu-item
                @click="router.push(item.children[0].path)"
                :key="item.children[0].path"
              >
                <template #icon> </template>
                <span>{{ item.children[0].meta.title }}</span>
              </a-menu-item>
            </template>
          </template>
          <!-- 没有子菜单 -->
          <template v-else>
            <a-menu-item @click="router.push(item.path)" :key="item.path">
              <template #icon> </template>
              <span>{{ item.meta.title }}</span>
            </a-menu-item>
          </template>
        </template>
      </template>
      <!-- 日期选择 -->
      <a-menu-item key="date">
        <a-date-picker
          v-model:value="dateVal"
          @change="panelChange"
          valueFormat="YYYY"
          picker="year"
        />
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup>
import { routes } from "../router";
import { mainStore } from "@/store";

const store = mainStore();

let openKeys = ref([]);
let dateVal = ref("2022");
let selectedKeys = computed(() => {
  return [route.fullPath];
});
const router = useRouter();
const route = useRoute();
const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});
const panelChange = (value) => {
  store.setYear(value);
};
</script>

<style lang="less" scoped>
.logo {
  height: 50px;
  background: @common-color;
  padding-left: 24px;

  .svg-icon {
    width: 32px;
    height: 32px;
  }
}

.menuBox {
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 50px);

  &::-webkit-scrollbar {
    width: 0px;
    // background-color: red;
  }
}

.ant-menu {
  :deep(.ant-menu-sub.ant-menu-inline) {
    background-color: #fff;
  }

  .menuClassName {
    &:after {
      content: "new";
      position: absolute;
      right: -32px;
      top: 2px;
      display: block;
      font-size: 12px;
      color: #fff;
      background: red;
      width: 28px;
      height: 16px;
      line-height: 14px;
      text-align: center;
      border-radius: 4px;
    }
  }
}
</style>
