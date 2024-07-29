<template>
  <div class="h-screen w-screen d-flex flex-column paneleight">
    <div class="d-flex h-25 w-auto flex-column pa-4 ga-4">
      <div class="title-paneleight font-weight-black">
        Oleh karenanya, penduduk usia produktif yang paling banyak melakukan
        migrasi.
      </div>
    </div>
    <div class="d-flex h-75 w-auto flex-row">
      <div class="w-50">
        <apexchart
          ref="chart1"
          class="align-center justify-center"
          width="100%"
          height="100%"
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div class="w-50 d-flex flex-column">
        <div class="h-50">
          <v-img
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/peep.png"
            style="width: auto; height: 80%"
          />
        </div>
        <div class="h-50">
          <v-img
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/walking worker.png"
            style="width: 100%; height: auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  name: "PanelEight",
  data() {
    return {
      series: [13.7, 36.9, 46.1, 3.3],
      chartOptions: {
        labels: ["5-14 tahun", "15-29 tahun", "30-59 tahun", "60+ tahun"],
        colors: ["#0D47A1", "#1976D2", "#2196F3", "#64B5F6"],
        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "10pt",
            fontFamily: "Barlow, sans-serif",
            fontWeight: "bold",
          },
        },
        legend: {
          fontSize: "16pt",
          fontFamily: "Barlow, sans-serif",
        },
      },
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".paneleight",
      start: "top bottom",
      end: "+=100%",
      onEnter: () => {
        this.$refs.chart1.updateOptions(true, true, true);
      },
    });
  },
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-paneleight {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-paneleight {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 16pt;
  line-height: 1;
}

.parent3 {
  background-color: #16a403;
}
</style>