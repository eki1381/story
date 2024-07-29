<template>
  <div class="h-screen w-screen d-flex flex-column panelten">
    <v-img
      class="position-relative"
      src="https://raw.githubusercontent.com/eki1381/Storytelling/main/construction_bg_2.png"
      style="width: 100%; height: auto"
    />
    <div class="position-absolute w-100 h-100">
      <div class="d-flex h-25 w-auto flex-column pa-4">
        <div class="title-panelten font-weight-black">
          Berbeda dengan Bejo, ada 'Tangis' Mas Prihanto
        </div>
      </div>
      <div class="d-flex h-75 w-auto flex-row">
        <div class="w-50 d-flex flex-column justify-center align-center ga-2">
          <v-card
            color="#ffffff"
            :height="'40%'"
            :width="'80%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
          >
            <div class="subtitle-panelten font-weight-black text-justify ma-2">
              Prihanto adalah migran tamatan SMK di kota. Di tahun ke-11 nya
              bekerja, Prihanto terkena PHK. Karena tidak ada pilihan lain,
              Prihanto memilih untuk pulang ke kampung halamannya.
            </div>
          </v-card>
          <v-card
            color="#ffffff"
            :height="'30%'"
            :width="'80%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-2 rounded-xl"
          >
            <div class="ma-2 subtitle-panelten text-justify">
              <b>13</b> dari <b>100</b> penduduk yang memiliki pengalaman
              migrasi memilih untuk pulang ke kampung halamannya.
            </div>
          </v-card>
        </div>

        <div
          class="w-50 d-flex flex-column justify-center align-end ma-2 ga-2"
        ></div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "PanelTen",
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-panelten {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-panelten {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 16pt;
  line-height: 1;
}
</style>