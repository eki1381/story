<template>
  <div class="h-screen w-screen d-flex flex-column panelsix">
    <div class="d-flex h-25 w-auto flex-column pa-4 ga-4">
      <div class="title-panelsix font-weight-black">
        Gemerlap perkotaan menjadi magnet untuk bermigrasi
      </div>
      <div class="subtitle-panelsix font-weight-normal">
        Perbedaan peluang kerja antara perkotaan dan perdesaan menarik penduduk
        untuk bermigrasi dan membawa serta anggota keluarganya.
      </div>
    </div>
    <div class="d-flex parent3 h-75 w-auto flex-row pa-4">
      <div class="w-25 h-auto d-flex flex-column justify-space-between">
        <v-card
          color="#F18701"
          class="elevation-0 d-flex flex-column justify-center align-center pa-2 ga-2 rounded-xl"
          :height="'30%'"
          ><div
            class="d-flex align-center justify-center text-center font-weight-normal text-panelsix"
          >
            Migrasi Risen Perkotaan
          </div>

          <div
            class="d-flex align-center justify-center text-center number-panelsix font-weight-bold"
          >
            <vue3-autocounter
              ref="counter1"
              :startAmount="0"
              :endAmount="65.8"
              :duration="1"
              :decimals="1"
              :autoinit="false"
              decimalSeparator=","
            />
            %
          </div></v-card
        >
      </div>
      <div class="w-50 h-auto child2">
        <Vue3Lottie
          animation-link="https://raw.githubusercontent.com/eki1381/Storytelling/main/Area%20Moving.json"
          :speed="1"
          :width="'100%'"
        />
      </div>
      <div class="w-25 h-auto d-flex flex-column justify-end child3">
        <v-card
          color="#39A2AE"
          :height="'30%'"
          class="elevation-0 d-flex flex-column justify-center align-center pa-2 ga-2 rounded-xl"
          ><div
            class="d-flex align-center justify-center text-center font-weight-normal text-panelsix"
          >
            Migrasi Risen Perdesaan
          </div>
          <div
            class="d-flex align-center justify-center text-center number-panelsix font-weight-bold"
          >
            <vue3-autocounter
              ref="counter2"
              :startAmount="0"
              :endAmount="34.2"
              :duration="1"
              :decimals="1"
              :autoinit="false"
              decimalSeparator=","
            />%
          </div></v-card
        >
      </div>
    </div>
  </div>
</template>
    
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  name: "PanelSix",
  methods: {
    start() {
      this.$refs.counter1.start();
      this.$refs.counter2.start();
    },
  },
  mounted(){
    gsap.registerPlugin(ScrollTrigger);
    new ScrollTrigger.create({
      trigger: ".panelsix",
      start: "top bottom",
      end: "+=100%",
      onEnter: () => {
        this.start();
      },
    });
  }
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-panelsix {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-panelsix {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 16pt;
  line-height: 1;
}

.text-panelsix {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: white;
  font-size: 20pt;
  line-height: 1;
}

.number-panelsix {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: white;
  font-size: 28pt;
  line-height: 1;
}
</style>