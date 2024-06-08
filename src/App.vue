<template>
  <v-layout>
    <v-app-bar style="z-index: 1" app fixed :flat="true" :color="'transparent'">
      <v-toolbar-title>
        <!-- <v-img
          class="toolbar"
          :height="'40px'"
          :width="'auto'"
          contain
          src="https://raw.githubusercontent.com/eki1381/Storytelling/main/logo.png"
        ></v-img> -->
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center pt-0" style="z-index: 0">
      <div class="container">
        <PanelOne data-bgcolor="#65827E" data-textcolor="#000000"></PanelOne>
        <PanelTwo data-bgcolor="#0077b6" data-textcolor="#002400"></PanelTwo>
        <PanelThree data-bgcolor="#171F32" data-textcolor="#002400"></PanelThree>
        <PanelFour data-bgcolor="#123456" data-textcolor="#002400"></PanelFour>
      </div>
    </v-main>
  </v-layout>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PanelOne from "./components/PanelOne.vue";
import PanelTwo from "./components/PanelTwo.vue";
import PanelThree from "./components/PanelThree.vue";
import PanelFour from "./components/PanelFour.vue";

export default {
  name: "App",
  components: {
    PanelOne,
    PanelTwo,
    PanelThree,
    PanelFour,
  },
  methods: {},
  mounted() {
    window.addEventListener("load", function () {
      gsap.registerPlugin(ScrollTrigger);

      const pageContainer = document.querySelector(".container");
      pageContainer.setAttribute("data-scroll-container", "");

      const scroller = new LocomotiveScroll({
        el: pageContainer,
        inertia: 0.8,
        getDirection: true,
      });

      scroller.on("scroll", function (t) {
        document.documentElement.setAttribute("data-direction", t.direction);
      });

      scroller.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed",
      });

      const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
      scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText =
          i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
          trigger: colorSection,
          scroller: "[data-scroll-container]",
          start: "top 50%",
          onEnter: () =>
            gsap.to("body", {
              backgroundColor: colorSection.dataset.bgcolor,
              color: colorSection.dataset.textcolor,
              overwrite: "auto",
            }),
          onLeaveBack: () =>
            gsap.to("body", {
              backgroundColor: prevBg,
              color: prevText,
              overwrite: "auto",
            }),
        });
      });

      ScrollTrigger.addEventListener("refresh", () => scroller.update());
      ScrollTrigger.refresh();
    });
  },
};
</script>

<style>
</style>
