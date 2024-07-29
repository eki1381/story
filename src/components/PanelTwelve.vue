<template>
  <div class="h-screen w-screen d-flex flex-column paneltwelve">
    <div class="w-100 h-100">
      <div class="d-flex h-25 w-auto flex-column pa-4 ga-4">
        <div class="title-paneltwelve font-weight-black">
          Ada juga 'Tangis' Para Migran Korban Bencana
        </div>
        <div class="subtitle-paneltwelve font-weight-normal">
          Bencana alam bisa menjadi salah satu faktor pendorong yang menyebabkan
          penduduk terpaksa untuk melakukan migrasi.
        </div>
      </div>
      <div class="d-flex w-100 h-75 flex-row">
        <div class="d-flex w-25 pa-4 title-paneltwelve-2 font-weight-black text-center">
          "Semburan lumpur lapindo menyebabkan 25 ribu jiwa dari 8 desa di 3 kecamatan harus mengungsi."
        </div>
        <div class="d-flex w-75">
          <v-img
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/flood.png"
            style="width: 100%; height: auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>

export default {
  name: "PanelTwelve",
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-paneltwelve {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 32pt;
  line-height: 1;
}

.title-paneltwelve-2 {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 24pt;
  line-height: 1;
}

.subtitle-paneltwelve {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #ffffff;
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