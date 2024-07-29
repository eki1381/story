<template>
  <div class="h-screen w-screen d-flex flex-column panelthirteen">
    <div class="w-100 h-100 d-flex flex-row position-relative">
      <div class="w-50">
        <div class="h-50"></div>
        <div class="h-50 d-flex flex-row justify-start align-start">
          <v-img
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/look map2.png"
            style="width: 50%; height: auto"
          />
          <div class="w-50"></div>
        </div>
      </div>
      <div class="w-50">
        <div class="h-50"></div>
        <div class="h-50 d-flex flex-row justify-end align-end">
          <div class="w-50"></div>
          <v-img
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/look map.png"
            style="width: 50%; height: auto"
          />
        </div>
      </div>
    </div>

    <div class="w-100 h-100 position-absolute">
      <div class="d-flex h-25 w-auto flex-column pa-4 ga-4">
        <div class="title-panelthirteen font-weight-black">
          Meski ada tangis, kenapa semakin banyak penduduk bermigrasi?
        </div>
      </div>
      <div class="d-flex w-100 flex-row">
        <kinesis-container>
          <div class="d-flex flex-row justify-center ga-4">
            <kinesis-element
              tag="img"
              width="20%"
              height="40%"
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/photo1.png"
              :strength="5"
              type="rotate"
              transformOrigin="50% 300%"
              axis="x"
            />
            <kinesis-element
              tag="img"
              width="20%"
              height="40%"
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/photo2.png"
              :strength="5"
              type="rotate"
              transformOrigin="50% 300%"
              axis="x"
            />
            <kinesis-element
              tag="img"
              width="20%"
              height="40%"
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/photo3.png"
              :strength="5"
              type="rotate"
              transformOrigin="50% 300%"
              axis="x"
            />
          </div>
        </kinesis-container>
      </div>
      <div class="d-flex h-25 w-auto flex-column justify-center align-center ma-2">
        <div class="subtitle-panelthirteen font-weight-black">
          "Migrasi seolah melekat pada budaya dan tradisi di Indonesia."
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "PanelThirteen",
  components: [KinesisContainer, KinesisElement],
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

.title-panelthirteen {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #3d5c8a;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-panelthirteen {
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