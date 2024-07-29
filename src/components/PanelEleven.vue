<template>
  <div class="h-screen w-screen d-flex flex-column paneleleven">
    <div class="w-100 h-100">
      <div class="d-flex h-25 w-auto flex-column pa-4">
        <div class="title-paneleleven font-weight-black">
          Alasannya migran pulang kampung berbeda-beda, mulai dari pekerjaan,
          ikut keluarga, hingga terkena PHK.
        </div>
      </div>
      <div class="d-flex h-75 w-auto flex-column">
        <apexchart
          ref="chart3"
          class="align-center justify-center ma-0"
          width="100%"
          height="90%"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
    
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  name: "PanelEleven",
  data() {
    return {
      series: [
        {
          data: [
            {
              x: "Ikut suami/istri/orang tua/anak",
              y: 35,
              fillColor: "#f18a2d",
            },
            {
              x: "Pekerjaan",
              y: 29,
              fillColor: "#f18a2d",
            },
            {
              x: "Lainnya",
              y: 11,
              fillColor: "#f18a2d",
            },
            {
              x: "Perubahan status perkawinan ",
              y: 8,
              fillColor: "#f18a2d",
            },
            {
              x: "Mencari pekerjaan",
              y: 7,
              fillColor: "#f18a2d",
            },
            {
              x: "Pendidikan",
              y: 5,
              fillColor: "#f18a2d",
            },
            {
              x: "Perumahan",
              y: 5,
              fillColor: "#f18a2d",
            },
            {
              x: "Ikut saudara kandung/famili lain",
              y: 1,
              fillColor: "#f18a2d",
            },
            {
              x: "Keamanan/konflik",
              y: 0.41,
              fillColor: "#f18a2d",
            },
            {
              x: "Bencana/kerusakan lingkungan",
              y: 0.13,
              fillColor: "#f18a2d",
            },
          ],
        },
      ],
      chartOptions: {
        grid: {
          show: false,
        },
        colors: ["#0D47A1", "#1976D2", "#2196F3", "#64B5F6"],
        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "12pt",
            fontFamily: "Barlow, sans-serif",
            fontWeight: "bold",
          },
        },
        xaxis: {
          labels: {
            style: {
              fontSize: "8pt",
              fontFamily: "Barlow, sans-serif",
            },
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
      trigger: ".paneleleven",
      start: "top bottom",
      end: "+=100%",
      onEnter: () => {
        this.$refs.chart3.updateOptions(true, true, true);
      },
    });
  },
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-paneleleven {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-paneleleven {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 16pt;
  line-height: 1;
}

.parent2 {
  background-color: #201e1f;
}

.parent3 {
  background-color: #16a403;
}
</style>