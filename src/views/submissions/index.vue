<template>
  <div>
    <div class="tm-bg-white tm-p-2">
      <a-form ref="formRef" layout="inline" :model="formInline" :colon="false">
        <a-col :xs="24" :sm="24" :md="12" :xl="8" :xxl="6">
          <a-form-item label="Submission" name="submission">
            <a-input
              style="width: 220px"
              v-model:value="formInline.submission"
              placeholder=""
              @keyup.native.enter="onSubmit"
            ></a-input>
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :xl="8" :xxl="6">
          <a-form-item class="tm-flex">
            <a-button class="tm-mr-2" type="primary" @click="onSubmit"
              >Search</a-button
            >
            <a-button @click="onReset">Reset</a-button>
          </a-form-item>
        </a-col>
      </a-form>
    </div>
    <div class="tm-bg-white tm-mt-2 tm-p-2">
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Name </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in record.tags"
                :key="tag"
                :color="
                  tag === 'loser'
                    ? 'volcano'
                    : tag.length > 5
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a @click="goDetail">Detail</a>
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { mainStore } from "@/store";
import { storeToRefs } from "pinia";

const store = mainStore();
const { year: selYear } = storeToRefs(store);
watch(
  () => selYear.value,
  () => {}
);

const columns = [
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
  },
];
let data = ref([
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
]);
let formInline = ref({
  submission: "",
});
const onSubmit = () => {};
const onReset = () => {};
const router = useRouter();
const goDetail = () => {
  router.push("/submissionsDetail");
};
</script>
