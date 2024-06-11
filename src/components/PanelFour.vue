<template>
  <div
    class="h-screen w-screen d-flex position-relative flex-column align-center panelfour pa-12 ga-6"
  >
    <div class="d-flex w-100 top-0 position-absolute">
      <vue-particles
        id="tsParticles2"
        class="w-100 h-auto"
        :options="{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          background: {
            color: 'transparent',
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0,
                size: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'out',
              random: true,
              speed: 0.3,
            },
            number: {
              density: {
                enable: true,
              },
              value: 600,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 5,
              },
              value: { min: 0.3, max: 0.6 },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 1,
            },
          },
        }"
      >
      </vue-particles>
    </div>

    <div class="d-flex w-100 bottom-0 position-absolute globe crowd-2020">
      <v-img
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/crowd_2020.png"
        style="height: 100%"
      />
    </div>
    <div class="d-flex w-100 bottom-0 position-absolute globe crowd-2010">
      <v-img
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/crowd_2010.png"
        style="height: 100%"
      />
    </div>
    <div class="d-flex w-100 bottom-0 position-absolute globe crowd-2000">
      <v-img
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/crowd_2000.png"
        style="height: 100%"
      />
    </div>
    <div class="d-flex w-100 bottom-0 position-absolute globe crowd-1990">
      <v-img
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/crowd_1990.png"
        style="height: 100%"
      />
    </div>
    <div class="d-flex w-100 bottom-0 position-absolute globe crowd-1980">
      <v-img
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/crowd_1980.png"
        style="height: 100%"
      />
    </div>
    <div class="d-flex w-100 bottom-0 position-absolute globe crowd-1971">
      <v-img
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/crowd_1971.png"
        style="height: 100%"
      />
    </div>

    <div class="d-flex flex-column w-100 ga-6">
      <div class="d-flex flex-row ga-2 justify-end">
        <div class="title-panelfour font-weight-black text-right">
          Tren Migrasi Seumur Hidup<br />Antar Provinsi di Indonesia
        </div>
        <div class="h-100" style="width: 3px; background-color: white"></div>
      </div>

      <div class="d-flex flex-row ga-6 justify-end">
        <div class="d-flex flex-column justify-center ga-2" style="color: ">
          <div class="title-value font-weight-thin text-center">Tahun</div>
          <div class="d-flex flex-row align-center">
            <v-btn
              variant="text"
              icon="mdi-menu-left"
              color="white"
              @click="decreaseYear"
            ></v-btn>
            <div class="value font-weight-bold text-center">
              {{ currentYear }}
            </div>
            <v-btn
              variant="text"
              icon="mdi-menu-right"
              color="white"
              @click="increaseYear"
            ></v-btn>
          </div>
        </div>
        <div class="d-flex flex-column justify-center ga-2">
          <div class="title-value font-weight-thin center">% Migran</div>
          <vue3-autocounter
            class="value font-weight-bold text-right"
            :startAmount="previousMigration"
            :endAmount="migration[currentIndex]"
            :duration="2"
            :decimals="2"
            :autoinit="true"
            decimalSeparator=","
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
  name: "PanelFour",
  data() {
    return {
      currentYear: 1971,
      years: [1971, 1980, 1990, 2000, 2010, 2020],
      migration: [4.9, 6.9, 8.2, 9.9, 11.8, 9.8],
      previousMigration: 0,
    };
  },
  computed: {
    currentIndex() {
      return this.years.indexOf(this.currentYear);
    },
  },
  watch: {
    currentYear() {
      this.previousMigration = this.migration[this.currentIndex - 1];
    },
  },
  methods: {
    slideSceneFourIn() {
      gsap.fromTo(
        ".globe",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
        }
      );
    },
    slideSceneFourOut() {
      // let tl = gsap.timeline();
      // tl.fromTo(
      //   ".globe",
      //   { y: 0, opacity: 0 },
      //   {
      //     y: 100,
      //     opacity: 1,
      //     duration: 2,
      //   }
      // );
      // tl.to(".globe", { y: 0, opacity: 0, duration: 0.01 });
      // tl.play();
    },
    increaseYear() {
      const currentIndex = this.years.indexOf(this.currentYear);
      const nextIndex = currentIndex + 1;
      if (nextIndex < this.years.length) {
        this.currentYear = this.years[nextIndex];
      }
      this.changeYear(this.currentYear);
    },
    decreaseYear() {
      const currentIndex = this.years.indexOf(this.currentYear);
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        this.currentYear = this.years[prevIndex];
      }
      this.changeYear(this.currentYear);
    },
    changeYear(year) {
      if (year == 1971) {
        gsap.to(".crowd-1971", { opacity: 1, duration: 0.01 });
        gsap.to(".crowd-1980", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1990", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2000", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2010", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2020", { opacity: 0, duration: 0.01 });
      }
      if (year == 1980) {
        gsap.to(".crowd-1980", { opacity: 1, duration: 0.01 });
        gsap.to(".crowd-1971", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1990", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2000", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2010", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2020", { opacity: 0, duration: 0.01 });
      }
      if (year == 1990) {
        gsap.to(".crowd-1990", { opacity: 1, duration: 0.01 });
        gsap.to(".crowd-1971", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1980", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2000", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2010", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2020", { opacity: 0, duration: 0.01 });
      }
      if (year == 2000) {
        gsap.to(".crowd-2000", { opacity: 1, duration: 0.01 });
        gsap.to(".crowd-1971", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1980", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1990", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2010", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2020", { opacity: 0, duration: 0.01 });
      }
      if (year == 2010) {
        gsap.to(".crowd-2010", { opacity: 1, duration: 0.01 });
        gsap.to(".crowd-1971", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1980", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1990", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2000", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2020", { opacity: 0, duration: 0.01 });
      }
      if (year == 2020) {
        gsap.to(".crowd-2020", { opacity: 1, duration: 0.01 });
        gsap.to(".crowd-1971", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1980", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-1990", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2000", { opacity: 0, duration: 0.01 });
        gsap.to(".crowd-2010", { opacity: 0, duration: 0.01 });
      }
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.changeYear(this.currentYear);

    ScrollTrigger.create({
      trigger: ".panelfour",
      start: "top bottom",
      end: "+=10%",
      onEnter: () => {
        this.slideSceneFourIn();
      },
      onLeaveBack: () => {
        this.slideSceneFourOut();
      },
    });
  },
};
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-panelfour {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: white;
  font-size: 32pt;
  line-height: 1;
}

.value {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: white;
  font-size: 32pt;
  line-height: 1;
}

.title-value {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: white;
  font-size: 18pt;
  line-height: 1;
}
</style>