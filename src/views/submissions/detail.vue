<template>
  <div class="tm-bg-white tm-p-2">
    <div class="title">AIN457M HS</div>
    <div class="tm-mt-2">
      <div class="tItem" v-for="item in list">
        <div class="img">
          Study
        </div>
        <div class="tm-ml-2">{{ item.name }}</div>
      </div>
    </div>
    <div class="tm-mt-2">
      <div class="tm-fs-xxl tm-mb-3">Submission</div>
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              Health Authority
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
        </template>
      </a-table>
    </div>
    <div class="tm-mt-2">
      <div class="tm-fs-xxl tm-mb-3">Milestones</div>
      <a-table :columns="columns2" :data-source="data2" :pagination="false">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              Name
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
const list = ref([
  {
    id: 1,
    name: "CAIN457M2301",
  },
  {
    id: 2,
    name: "CAIN457M2302",
  },

]);
const columns = [
  {
    name: "Health Authority",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Planned Date",
    dataIndex: "pdate",
    key: "pdate",
  },
  {
    title: "Actual Date",
    dataIndex: "adate",
    key: "adate",
  },
];

const columns2 = [
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Planned Date",
    dataIndex: "pdate",
    key: "pdate",
  },
  {
    title: "Actual Date",
    dataIndex: "adate",
    key: "adate",
  },
];

const data = [
  {
    key: "1",
    name: "FDA Submission",
    pdate: "2022-09-29",
    adate: "2022-09-30",
  },
  {
    key: "2",
    name: "EMA Submission",
    pdate: "2022-05-30",
    adate: "2022-10-19",
  },
  {
    key: "3",
    name: "NMPA Submission",
    pdate: "",
    adate: "",
  },
  {
    key: "4",
    name: "PMDA Submission",
    pdate: "2024-01-30",
    adate: "",
  },
];

const data2 = [
  {
    key: "1",
    name: "Submission KO",
    pdate: "2020-03-18",
    adate: "2020-03-18",
  },
  {
    key: "2",
    name: "Last study iDBL",
    pdate: "2021-11-11",
    adate: "2021-11-10",
  },
  {
    key: "3",
    name: "Last study iCSR Published",
    pdate: "2022-04-27",
    adate: "2022-04-27",
  },
  {
    key: "4",
    name: "Last SumOutp",
    pdate: "2022-06-24",
    adate: "2022-06-24",
  },
  {
    key: "5",
    name: "First dispatch",
    pdate: "2022-05-30",
    adate: "2022-10-19",
  },
  {
    key: "6",
    name: "WP close out",
    pdate: "2024-01-31",
    adate: "",
  },
];
</script>

<style lang="less" scoped>
.title {
 font-size: 28px;
}

.tItem {
 display: flex;
 width: 100%;
 padding: 20px;
 border-bottom: 1px solid #eee;
&:nth-child(2n + 1) .img {
   background-color: rgb(106, 155, 211);
 }
&:nth-child(2n) .img {
   background-color: rgb(221, 153, 29);
 }
 .img {
   width: 80px;
   height: 80px;
   line-height: 100px;
   text-align: center;
   color: #fff;
 }
}
</style>