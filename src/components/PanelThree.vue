<template>
  <div class="h-screen w-auto position-relative panelthree">
    <div class="position-absolute d-flex bottom-0 village">
      <Vue3Lottie
        class="d-flex"
        animation-link="https://raw.githubusercontent.com/eki1381/Storytelling/main/Night%20Village.json"
        :width="'100%'"
        :speed="0.2"
      />
    </div>
    <div
      class="position-absolute d-flex flex-column top-0 left-0 mt-5 ml-5 ga-2"
    >
      <div class="d-flex align-center font-weight-medium narration1">
        Ketika kampung halaman terlihat&nbsp;<b>Gelap</b>&nbsp;
      </div>
      <div class="d-flex align-center font-weight-medium narration2">
        dan kampung tetangga terlihat lebih&nbsp;<b>Gemerlap</b>&nbsp;
      </div>
    </div>
    <div
      class="position-absolute d-flex flex-column bottom-0 right-0 mb-5 mr-5 ga-2"
    >
      <div
        class="d-flex align-center justify-end text-right font-weight-medium narration3"
      >
        <b>Migrasi</b>&nbsp;menjadi pilihan banyak orang
      </div>
      <div
        class="d-flex align-center justify-end text-right font-weight-medium narration3"
      >
        karena memberikan peluang kehidupan
      </div>
      <div
        class="d-flex align-center justify-end text-right font-weight-medium narration3"
      >
        yang lebih baik
      </div>
    </div>
    <div
      class="position-absolute d-flex justify-center background w-100"
      style="top: 15%"
    >
      <v-img
        :width="'200px'"
        :height="'200px'"
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/moon.png"
      ></v-img>
    </div>
    <div class="position-absolute d-flex bottom-0 w-100">
      <v-img
        class="city"
        :width="'75vw'"
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/Night%20City_fg.png"
      ></v-img>
    </div>
    <div
      class="position-absolute d-flex justify-center align-center background w-100"
      style="top: 15%"
    >
      <v-img
        class="moon"
        :width="'200px'"
        :height="'200px'"
        @click="onClickLanjut"
        src="https://raw.githubusercontent.com/eki1381/Storytelling/main/moon.png"
      ></v-img>
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

let tlButton;

export default {
  name: "PanelThree",
  methods: {
    initState() {
      gsap.to(".narration1", { opacity: 0, duration: 0.1 });
      gsap.to(".narration2", { opacity: 0, duration: 0.1 });
      gsap.to(".narration3", { opacity: 0, duration: 0.1 });
      gsap.to(".city", { opacity: 0, duration: 0.1 });
      gsap.to(".button", { opacity: 0 });

      tlButton = gsap.timeline({ repeat: -1, yoyo: true });
      tlButton.fromTo(".button", { opacity: 0 }, { opacity: 1, duration: 1 });
      tlButton.play();
    },
    slideSceneIn() {
      gsap.fromTo(
        ".narration1",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
        }
      );
    },
    slideSceneOut() {
      gsap.fromTo(".moon", { opacity: 0 }, { opacity: 1, duration: 0.01 });
      let tl = gsap.timeline();
      tl.fromTo(
        ".city",
        { y: 0, opacity: 1 },
        { y: 100, opacity: 0, duration: 1 }
      );
      tl.fromTo(".city", { y: 100 }, { y: 0, opacity: 0, duration: 0.01 });
      tl.fromTo(
        ".village",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
      tl.to(".narration1", {
        opacity: 0,
        duration: 0.01,
      });
      tl.to(".narration2", {
        opacity: 0,
        duration: 0.01,
      });
      tl.to(".narration3", {
        opacity: 0,
        duration: 0.01,
      });
      tl.play();
    },
    onClickLanjut() {
      gsap.to(".narration2", {
        opacity: 1,
        duration: 1,
      });
      gsap.fromTo(".moon", { opacity: 1 }, { opacity: 0, duration: 0.01 });
      let tl = gsap.timeline();
      tl.fromTo(
        ".village",
        { y: 0, opacity: 1 },
        { y: 100, opacity: 0, duration: 1 }
      );
      tl.fromTo(".village", { y: 100 }, { y: 0, duration: 0.01 });
      tl.fromTo(
        ".city",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
      gsap.to(".narration3", {
        opacity: 1,
        duration: 1,
      });
      tl.play();
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.initState();

    ScrollTrigger.create({
      trigger: ".panelthree",
      start: "top bottom",
      end: "+=10%",
      onEnter: () => {
        this.slideSceneIn();
      },
      onLeaveBack: () => {
        this.slideSceneOut();
      },
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.narration1 {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 18pt;
  line-height: 1;
}
.narration2 {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 18pt;
  line-height: 1;
}
.narration3 {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 18pt;
  line-height: 1;
}
</style>