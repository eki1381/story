<template>
  <div class="h-screen w-screen d-flex flex-column panelnine">
    <v-img
      class="position-relative"
      src="https://raw.githubusercontent.com/eki1381/Storytelling/main/construction_bg.png"
      style="width: 100%; height: auto"
    />
    <div class="position-absolute w-100 h-100">
      <div class="d-flex h-25 w-auto flex-column pa-4">
        <div class="title-panelnine font-weight-black">
          Salah satunya pemuda dari desa, sebut saja bernama Bejo
        </div>
      </div>
      <div class="d-flex h-75 w-auto flex-row">
        <div class="w-50 d-flex flex-column justify-center align-center ga-2">
          <v-card
            color="#ffffff"
            :height="'60%'"
            :width="'80%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
          >
            <div class="h-25 ma-2 subtitle-panelnine font-weight-black">
              Pekerja migran risen didominasi oleh lulusan SMA
            </div>
            <div class="h-100 w-100">
              <apexchart
                ref="chart2"
                class="align-center justify-center ma-0"
                width="100%"
                height="100%"
                type="bar"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </v-card>
          <v-card
            color="#ffffff"
            :height="'20%'"
            :width="'80%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
          >
            <div class="ma-2 subtitle-panelnine text-justify">
              <b>3</b> dari <b>100</b> penduduk bekerja umur 15+ tahun adalah
              <b>pekerja migran risen</b>.
            </div>
          </v-card>
        </div>

        <div class="w-50 d-flex flex-column justify-center align-end ma-2 ga-2">
          <v-card
            color="#ffffff"
            :height="'30%'"
            :width="'50%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
          >
            <div class="ma-2 subtitle-panelnine font-weight-black">
              Bejo merupakan lulusan SMA yang bekerja di sebuah perusahaan
              berkat program magang nasional yang diikutinya.
            </div>
          </v-card>
          <v-card
            color="#ffffff"
            :height="'50%'"
            :width="'50%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
          >
            <div class="ma-2 subtitle-panelnine font-weight-black">
              Karena keuletannya, Bejo akhirnya diangkat menjadi pegawai tetap
              di sana. Gaji dan pekerjaan yang layak membuat Bejo memutuskan
              menetap di Kota. Mas Bejo menjadi migran risen.
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  name: "PanelNine",
  data() {
    return {
      series: [
        {
          data: [
            {
              x: "Tidak/Belum Tamat SD",
              y: 18.3,
              fillColor: "#EB8C87",
            },
            {
              x: "SD",
              y: 16.2,
              fillColor: "#EB8C87",
            },
            {
              x: "SMP",
              y: 18.4,
              fillColor: "#EB8C87",
            },
            {
              x: "SMA",
              y: 32.1,
              fillColor: "#EB8C87",
            },
            {
              x: "Diploma/Sarjana",
              y: 15.0,
              fillColor: "#EB8C87",
            },
          ],
        },
      ],
      chartOptions: {
        bar: { borderRadius: 5 },
        grid: {
          show: false,
        },
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
              fontSize: "6pt",
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
      trigger: ".panelnine",
      start: "top bottom",
      end: "+=100%",
      onEnter: () => {
        this.$refs.chart2.updateOptions(true, true, true);
      },
    });
  },
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-panelnine {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-panelnine {
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