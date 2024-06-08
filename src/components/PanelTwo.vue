<template>
  <div
    class="h-screen w-screen d-flex flex-row align-center justify-center"
  >
    <div
      class="text w-50 d-flex flex-column align-center justify-center ma-16 pa-16" style="transform: translate(-1000px, 0);"
    >
      <div class="quote text-center font-weight-black">
        “Migrasi bukan hanya suatu masalah yang harus diselesaikan. Lebih dari
        itu, migrasi adalah suatu realitas kemanusiaan yang harus dikendalikan.”
      </div>
      <div class="writer mt-8 font-weight-bold">- Louise Arbour, 2018 -</div>
      <div class="writer mt-0 pt-0 font-weight-medium">
        <i>Former</i> UN <i>High Commissioner for Human Rights</i>
      </div>
    </div>
    <div class="image w-50 d-flex align-center justify-center" style="transform: translate(1000px, 0);">
      <Vue3Lottie
        animation-link="https://raw.githubusercontent.com/eki1381/Storytelling/main/Map%20Moving.json"
        :height="'auto'"
        :width="'100%'"
      />
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  name: "PanelTwo",
  methods: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".text",
      start: "bottom bottom",
      end: "+=10%",
      onEnter: () => {
        gsap.fromTo(
          ".text",
          {
            x: -1000,
          },
          {
            x: 0,
            duration: 1.5,
          }
        );
        gsap.fromTo(
          ".image",
          {
            x: 1000,
          },
          {
            x: 0,
            duration: 1.5,
          }
        );
      },
      onLeaveBack: () => {
        gsap.fromTo(
          ".text",
          {
            x: 0,
          },
          {
            x: -1000,
            duration: 1.5,
          }
        );
        gsap.fromTo(
          ".image",
          {
            x: 0,
          },
          {
            x: 1000,
            duration: 1.5,
          }
        );
      },
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.quote {
  font-family: "Intro", sans-serif;
  font-style: normal;
  color: #c3f73a;
}

.writer {
  font-family: "Barlow", sans-serif;
  color: #ffffff;
}

@media (min-width: 576px) {
  .quote {
    font-size: 24pt;
    line-height: 1.15;
  }

  .writer {
    font-size: 12pt;
    line-height: 1.2;
  }
}

@media (min-width: 768px) {
  .quote {
    font-size: 24pt;
    line-height: 1.15;
  }

  .writer {
    font-size: 12pt;
    line-height: 1.2;
  }
}

@media (min-width: 992px) {
  .quote {
    font-size: 24pt;
    line-height: 1.15;
  }

  .writer {
    font-size: 12pt;
    line-height: 1.2;
  }
}

@media (min-width: 1200px) {
  .quote {
    font-size: 24pt;
    line-height: 1.15;
  }

  .writer {
    font-size: 12pt;
    line-height: 1.2;
  }
}
</style>