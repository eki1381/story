<template>
  <div class="h-screen w-screen overflow-hidden">
    <div class="position-relative">
      <Vue3Lottie
        animation-link="https://raw.githubusercontent.com/eki1381/Storytelling/main/Car%20Moving.json"
        :height="'auto'"
        :width="'100%'"
      />
    </div>
    <div
      class="bigtitle position-absolute d-flex flex-column align-center justify-center w-100 top-0 mt-xs-4 pt-xs-4 mt-sm-4 pt-sm-4 mt-md-8 pt-md-8 mt-lg-10 pt-lg-10 mt-xl-10 pt-xl-10 mt-xxl-10 pt-xxl-10"
    >
      <div
        class="d-flex align-center justify-center text-center font-weight-black title"
      >
        TANGIS DAN TAWA<br />
        MIGRAN DI INDONESIA
      </div>
      <div
        class="d-flex align-center justify-center text-center font-weight-black border-0 rounded-pill pl-8 pr-8 mt-4 subtitle"
      >
        Melihat Dua Sisi Potret Migrasi
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  name: "PanelOne",
  methods: {},

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    new ScrollTrigger.create({
      trigger: ".bigtitle",
      start: "bottom bottom",
      end: "+=10%",
      onEnter: () => {
        gsap.fromTo(
          ".bigtitle",
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          ".bigtitle",
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          }
        );
      },
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

.title {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #0067ce;
}

.subtitle {
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  color: #567772;
  background-color: #C3F73A;
}

@media (min-width: 576px) {
  .title {
    font-size: 45pt;
    line-height: 1;
  }

  .subtitle {
    font-size: 20pt;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 45pt;
    line-height: 1;
  }

  .subtitle {
    font-size: 20pt;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 45pt;
    line-height: 1;
  }

  .subtitle {
    font-size: 20pt;
  }
}

@media (min-width: 1200px) {
  .title {
    font-size: 45pt;
    line-height: 1;
  }

  .subtitle {
    font-size: 20pt;
  }
}
</style>
