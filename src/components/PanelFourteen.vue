<template>
  <div class="h-screen w-screen d-flex flex-column panelfourteen">
    <div class="w-100 h-100">
      <div class="d-flex h-25 w-auto flex-column pa-4 ga-4">
        <div class="title-paneltwelve font-weight-black">
          Dibalik gemerlapnya, daerah tujuan para migran menyimpan banyak
          permasalahan pembangunan
        </div>
      </div>
      <div class="d-flex w-100 flex-row">
        <Flicking :options="{ align: 'prev', circular: true }">
          <div :key="0" class="flicking-panel" style="width: 100%">
            <v-card class="mx-auto" max-width="80%">
              <v-img
                class="align-end text-white"
                height="350"
                src="https://raw.githubusercontent.com/eki1381/Storytelling/main/slide1.jpg"
                cover
              >
                <v-card-title class="title-paneltwelve-1 font-weight-black"
                  >1. Ketimpangan Wilayah</v-card-title
                >
              </v-img>
              <v-card-text>
                <div class="subtitle-paneltwelve">
                  SDM yang unggul terkonsentrasi pada suatu wilayah, maka
                  ketimpangan wilayah semakin tinggi.
                </div>
              </v-card-text>
            </v-card>
          </div>
          <div :key="1" class="flicking-panel" style="width: 100%">
            <v-card class="mx-auto" max-width="80%">
              <v-img
                class="align-end text-white"
                height="350"
                src="https://raw.githubusercontent.com/eki1381/Storytelling/main/slide2.jpg"
                cover
              >
                <v-card-title class="title-paneltwelve-1 font-weight-black"
                  >2. Permukiman Kumuh</v-card-title
                >
              </v-img>
              <v-card-text>
                <div class="subtitle-paneltwelve">
                  Semakin banyak migran datang, ketersediaan perumahan tidak
                  mencukupi dan harga rumah menjadi mahal.
                </div>
              </v-card-text>
            </v-card>
          </div>
          <div :key="2" class="flicking-panel" style="width: 100%">
            <v-card class="mx-auto" max-width="80%">
              <v-img
                class="align-end text-white"
                height="350"
                src="https://raw.githubusercontent.com/eki1381/Storytelling/main/slide3.jpg"
                cover
              >
                <v-card-title class="title-paneltwelve-1 font-weight-black"
                  >3. Kriminalitas</v-card-title
                >
              </v-img>
              <v-card-text>
                <div class="subtitle-paneltwelve">
                  Para migran yang gagal sukses, tidak bisa pulang ke kampung,
                  cenderung berpeluang untuk melakukan kejahatan.
                </div>
              </v-card-text>
            </v-card>
          </div>
        </Flicking>
      </div>
    </div>
  </div>
</template>
    
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Flicking from "@egjs/vue3-flicking";

export default {
  name: "PanelFourteen",
  components: {
    Flicking: Flicking,
  },
  data() {
    return {
      list: [0, 1, 2, 3, 4],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".pan",
      start: "bottom center",
      end: "bottom",
      onEnter: () => {},
    });
  },
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking.css");
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");

.title-paneltwelve {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #3d5c8a;
  font-size: 32pt;
  line-height: 1;
}

.title-paneltwelve-1 {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-paneltwelve {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #3d5c8a;
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