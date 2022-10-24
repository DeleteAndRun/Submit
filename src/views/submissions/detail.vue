<template>
  <div class="tm-bg-white tm-p-2">
    <div class="title">
      Submission ABC
    </div>
    <div class="tm-mt-2">
      <div class="tItem">
        <div class="img" style="background-color: aqua;">Study</div>
        <div class="tm-ml-2">Study</div>
      </div>
      <div class="tItem">
        <div class="img" style="background-color: purple;">Study</div>
        <div class="tm-ml-2">Study</div>
      </div>
    </div>
    <div class="tm-mt-2">
      <div class="tm-fs-xxl tm-mb-3">Submission</div>
      <a-table :columns="columns" :data-source="data" :pagination="false">
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
    <div class="tm-mt-2">
      <div class="tm-fs-xxl tm-mb-3">Milestones</div>
      <a-table :columns="columns" :data-source="data"  :pagination="false">
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
const columns = [{
  name: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
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

  .img {
    width: 80px;
    height: 80px;
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
}
</style>