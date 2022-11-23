<template>
  <div class="tm-flex tm-bg-white news">
    <div class="lt tm-ai-center tm-jc-center">
      <global-outlined class="w-100" />
      <div>Submission News</div>
    </div>
    <div class="rt">
      <div class="rItem">AAA517A1 PC QA report PAM &nbsp&nbsp&nbspFDA Submission &nbsp&nbsp&nbsp 2022-10-28</div>
      <div class="rItem">ACZ885H gouty arthritis sBLA  &nbsp&nbsp&nbsp FDA Submission  &nbsp&nbsp&nbsp 2022-10-27</div>
      <div class="rItem">AIN457A Pso A1402 Article46  &nbsp&nbsp&nbsp EMA Submission  &nbsp&nbsp&nbsp 2022-10-18</div>
      <div class="rItem">LTW888A1 Retinal dystrophy  &nbsp&nbsp&nbsp PMDA Submission  &nbsp&nbsp&nbsp 2022-09-30</div>
    </div>
  </div>
  <div class="tm-flex tm-mt-1">
    <div class="panel">
      <div class="left">
        <div class="title tm-text-grey-9">FDA Submission</div>
        <div class="num">
          22
          <rise-outlined class="tm-ml-2" />
        </div>
      </div>
      <div class="right">
        <column-height-outlined class="icon" />
      </div>
    </div>
    <div class="panel">
      <div class="left">
        <div class="title tm-text-grey-9">EMA Submission</div>
        <div class="num">
          36
          <rise-outlined class="tm-ml-2" />
        </div>
      </div>
      <div class="right">
        <column-height-outlined class="icon" />
      </div>
    </div>
    <div class="panel">
      <div class="left">
        <div class="title tm-text-grey-9">NMPA Submission</div>
        <div class="num">
          1
          <rise-outlined class="tm-ml-2" />
        </div>
      </div>
      <div class="right">
        <column-height-outlined class="icon" />
      </div>
    </div>
    <div class="panel">
      <div class="left">
        <div class="title tm-text-grey-9">PMDA Submission</div>
        <div class="num">
          5
          <rise-outlined class="tm-ml-2" />
        </div>
      </div>
      <div class="right">
        <column-height-outlined class="icon" />
      </div>
    </div>
  </div>
  <div class="chartBox tm-mt-1 tm-flex">
    <div class="tm-flex-1 tm-p-2">
      <div class="tm-text-grey-9 tm-mb-1">By DevUnit</div>
      <div class="myChart" id="chart1"></div>
    </div>
    <div class="tm-flex-1 tm-p-2">
      <div class="tm-text-grey-9 tm-mb-1">By Quarter</div>
      <div class="myChart" id="chart2"></div>
    </div>
    <div class="tm-flex-1 tm-p-2">
      <div class="tm-text-grey-9 tm-mb-1">By HA</div>
      <div class="myChart" id="chart3"></div>
    </div>
  </div>
  <div class="tm-mt-1 tm-p-2 tm-bg-white">
    <div class="tm-flex tm-jc-between">
      <div class="t">Submissions by Month</div>
      <div>
        <a-radio-group v-model:value="MonthType" button-style="solid">
          <a-radio-button value="a">All</a-radio-button>
          <a-radio-button value="b">FDA</a-radio-button>
          <a-radio-button value="c">EMA</a-radio-button>
          <a-radio-button value="d">NMPA</a-radio-button>
          <a-radio-button value="e">PMDA</a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <div class="chart4" id="chart4"></div>
  </div>
</template>

<script setup>
import {
  GlobalOutlined,
  ColumnHeightOutlined,
  RiseOutlined,
} from "@ant-design/icons-vue";
import { onUpdated } from "@vue/runtime-core";
import * as echarts from "echarts";
import { mainStore } from "@/store";
import { storeToRefs } from "pinia";

const store = mainStore();
// const selYear = store.selYear;
const { year: selYear } = storeToRefs(store);

watch(
  () => selYear.value,
  () => {
    data1.value = data1.value.map((n) => {
      return {
        name: n.name,
        value: n.value,
      };
    });
    data2.value = data2.value.map((n) => {
      return {
        name: n.name,
        value: n.value,
      };
    });
    data3.value = data3.value.map((n) => {
      return {
        name: n.name,
        value: n.value,
      };
    });
    data4.value = data4.value.map((n) => {
      return {
        name: n.name,
        value: n.value,
      };
    });
    console.log(111, data1.value, data2.value, data3.value, data4.value);
    init();
  }
);

let MonthType = ref("a");
let data1 = ref([
  { value: 2, name: "Cardio Renal Metabolic" },
  { value: 1, name: "Gene Therapies" },
  { value: 2, name: "Global Health" },
  { value: 10, name: "Immunology" },
  { value: 2, name: "Neuroscience" },
  { value: 18, name: "Oncology - Hematology" },
  { value: 26, name: "Oncology - Solid Tumors" },
  { value: 2, name: "Ophthalmology" },
  { value: 1, name: "Respiratory and Allergy" },
]);
let data2 = ref([
  { value: 10, name: "Q1" },
  { value: 9, name: "Q2" },
  { value: 10, name: "Q3" },
  { value: 3, name: "Q4" },
]);
let data3 = ref([
{ value: 22, name: "FDA" },
{ value: 36, name: "EMA" },
{ value: 1, name: "NMPA" },
{ value: 5, name: "PMDA" },
]);
let data4 = ref([
  { value: 2, name: "Jan" },
  { value: 2, name: "Feb" },
  { value: 6, name: "Mar" },
  { value: 3, name: "Apr" },
  { value: 2, name: "May" },
  { value: 4, name: "Jun" },
  { value: 1, name: "Jul" },
  { value: 3, name: "Aug" },
  { value: 6, name: "Sep" },
  { value: 3, name: "Oct" },
]);

const chart1Init = () => {
  let chartDom = document.getElementById("chart1");
  chartDom.removeAttribute("_echarts_instance_");
  let myChart = echarts.init(chartDom);
  let option = {
    legend: {
      top: "1%",
      orient: 'vertical',
      left: "left",
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: "By DevUnit",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },


        labelLine: {
          show: false,
        },
        data: data1.value,
      },
    ],
  };
  myChart.setOption(option);
};
const chart2Init = () => {
  let chartDom = document.getElementById("chart2");
  chartDom.removeAttribute("_echarts_instance_");
  let myChart = echarts.init(chartDom);
  let option = {
    legend: {
      top: "1%",
      left: "center",
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: "By Quarter",
        type: "pie",
        radius: "67%",
        data: data2.value,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },

      },
    ],
  };
  myChart.setOption(option);
};
const chart3Init = () => {
  let chartDom = document.getElementById("chart3");
  chartDom.removeAttribute("_echarts_instance_");
  let myChart = echarts.init(chartDom);
  let option = {
    legend: {
      top: "1%",
      left: "center",
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      label: data3.name,
      data: ['FDA', 'EMA', 'NMPA', 'PMDA'],
    },
    series: [
      {
        data: data3.value,
        type: "bar",
      },
    ],
  };
  myChart.setOption(option);
};
const chart4Init = () => {
  let chartDom = document.getElementById("chart4");
  let myChart = echarts.init(chartDom);
  let option = {
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data4.value,
        type: "line",
      },
    ],
  };
  myChart.setOption(option);
};
const init = () => {
  chart1Init();
  chart2Init();
  chart3Init();
  chart4Init();
};
onMounted(() => {
  init();
});
onUpdated(() => {
  init();
});
</script>

<style lang="less" scoped>
.news {
  border-radius: 5px;

  .lt {
    flex: 1;
    flex-wrap: wrap;

    .w-100 {
      font-size: 50px;
    }
  }

  .rt {
    flex: 6;

    .rItem {
      padding: 10px;
    }
  }
}

.panel {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 5px;

  &:nth-child(1) {
    color: green;
  }

  &:nth-child(2) {
    color: purple;
  }

  &:nth-child(3) {
    color: blue;
  }

  &:nth-child(4) {
    color: brown;
    margin-right: 0;
  }

  .title {
    margin-bottom: 20px;
  }

  .right {
    .icon {
      font-size: 38px;
    }
  }
}

.chartBox {
  .tm-flex-1 {
    background-color: #fff;

    .myChart {
      padding: 10px;
      height: 300px;
    }
  }
}

.chart4 {
  height: 280px;
}
</style>
