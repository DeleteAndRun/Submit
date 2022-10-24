<template>
  <div class="tm-flex tm-bg-white news">
    <div class="lt tm-ai-center tm-jc-center">
      <global-outlined class="w-100" />
      <div>Submission News</div>
    </div>
    <div class="rt">
      <div class="rItem">news1</div>
      <div class="rItem">news2</div>
      <div class="rItem">news3</div>
      <div class="rItem">news4</div>
    </div>
  </div>
  <div class="tm-flex tm-mt-1">
    <div class="panel">
      <div class="left">
        <div class="title tm-text-grey-9">FDA Submission</div>
        <div class="num">
          123
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
          123
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
          123
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
          123
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
      <div class="tm-text-grey-9 tm-mb-1">By Quarter</div>
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
        value: (Math.random() * 1000).toFixed(0),
      };
    });
    data2.value = data1.value.map((n) => {
      return {
        name: n.name,
        value: (Math.random() * 1000).toFixed(0),
      };
    });
    data3.value = data1.value.map((n) => {
      return (Math.random() * 1000).toFixed(0) - 0;
    });
    data4.value = data1.value.map((n) => {
      return (Math.random() * 100).toFixed(0) - 0;
    });
    console.log(111, data1.value, data2.value, data3.value, data4.value);
    init();
  }
);

let MonthType = ref("a");
let data1 = ref([
  { value: 1048, name: "A" },
  { value: 735, name: "B" },
  { value: 580, name: "C" },
  { value: 484, name: "D" },
]);
let data2 = ref([
  { value: 1048, name: "A" },
  { value: 735, name: "B" },
  { value: 580, name: "C" },
  { value: 484, name: "D" },
]);
let data3 = ref([100, 150, 200]);
let data4 = ref([150, 230, 224, 218, 135, 147, 260]);

const chart1Init = () => {
  let chartDom = document.getElementById("chart1");
  chartDom.removeAttribute("_echarts_instance_");
  let myChart = echarts.init(chartDom);
  let option = {
    legend: {
      top: "1%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
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
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "67%",
        data: data2.value,
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
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["C", "B", "A"],
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
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
    color: pink;
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
