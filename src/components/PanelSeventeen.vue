<template>
  <div
    class="h-screen w-screen d-flex flex-column justify-center align-center panelseventeen ga-4"
  >
    <div class="d-flex flex-column ma-2">
      <div
        class="title-paneltwelve font-weight-bold d-flex flex-column justify-center align-center mb-2"
        style="color: #ffffff"
      >
        Pelajari lebih lanjut :
      </div>
      <v-card
        color="#ffffff"
        :height="'auto'"
        :width="'100%'"
        class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
        ><div class="title-web font-italic font-weight-black">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bps.go.id"
            style="color: #0d47a1"
            >https://www.bps.go.id</a
          >
        </div></v-card
      >
    </div>
    <div class="d-flex flex-row justify-center align-center ma-2">
      <div class="w-25 d-flex flex-column align-center justify-end">
        <kinesis-container>
          <kinesis-element
            tag="img"
            :strength="10"
            type="depth"
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/cover1.jpg"
            style="width: auto; height: 200px"
          />
        </kinesis-container>
        <div
          class="title-book text-center font-weight-bold"
          style="color: #ffffff"
        >
          Buku II Analisis Tematik Kependudukan Indonesia (Migrasi dan
          Ketenagakerjaan)
        </div>
      </div>
      <div class="w-25 d-flex flex-column align-center justify-end">
        <kinesis-container>
          <kinesis-element
            tag="img"
            :strength="10"
            type="depth"
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/cover2.jpg"
            style="width: auto; height: 200px"
          />
        </kinesis-container>
        <div
          class="title-book text-center font-weight-bold"
          style="color: #ffffff"
        >
          Statistik Mobilitas Penduduk dan Tenaga Kerja 2023
        </div>
      </div>
      <div class="w-25 d-flex flex-column align-center justify-end">
        <kinesis-container>
          <kinesis-element
            tag="img"
            :strength="10"
            type="depth"
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/cover3.jpg"
            style="width: auto; height: 200px"
          />
        </kinesis-container>
        <div
          class="title-book text-center font-weight-bold"
          style="color: #ffffff"
        >
          Keadaan Angkatan Kerja di Indonesia Agustus 2023
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-center align-center ma-2">
      <div class="title-book font-weight-bold" style="color: #ffffff">
        Penulis:
      </div>
      <div class="title-book" style="color: #ffffff">Aprilia Ira Pratiwi</div>
      <div class="title-book" style="color: #ffffff">Tika Meilaningsih</div>
    </div>
    <div class="d-flex flex-column justify-center align-center ma-2">
      <div
        class="title-book font-weight-bold font-italic"
        style="color: #ffffff"
      >
        Developer:
      </div>
      <div class="title-book" style="color: #ffffff">
        Yohanes Eki Apriliawan
      </div>
    </div>
  </div>
</template>
    
<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "PanelSeventeen",
  components: [KinesisContainer, KinesisElement],
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking.css");
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");

.title-paneltwelve {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-size: 32pt;
  line-height: 1;
}

.title-book {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-size: 14pt;
  line-height: 1;
}

.title-web {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-size: 24pt;
  line-height: 1;
}

.subtitle-paneltwelve {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-size: 16pt;
  line-height: 1;
}
</style>