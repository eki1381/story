<template>
  <div class="h-screen w-screen d-flex flex-column panelseven">
    <div class="d-flex h-25 w-auto flex-column pa-4 ga-4">
      <div class="title-panelseven font-weight-black">
        Selain itu, upah buruh/karyawan yang tinggi di perkotaan menjadi penarik
        para migran
      </div>
    </div>
    <div class="d-flex h-75 w-auto flex-row">
      <div class="w-50 d-flex flex-column justify-end position-relative">
        <div>
          <v-img
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/city.png"
            style="width: 100%; height: auto"
          />
        </div>
        <div>
          <v-card
            color="#F18701"
            :width="'30%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-4 ga-2 rounded-xl position-absolute left-0 top-0 ml-2"
            ><div
              class="d-flex align-center justify-center text-center font-weight-bold ma-4 text-panelseven"
            >
              Rata-rata upah buruh/karyawan perkotaan Rp 3,5 juta per bulan
            </div>
          </v-card>
        </div>
        <div>
          <v-img
            class="position-absolute right-0 top-0"
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/rich.png"
            style="width: 50%; height: auto"
          />
        </div>
      </div>
      <div class="w-50 d-flex flex-column justify-end position-relative">
        <div>
          <v-img
            class="position-relative"
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/mountain.png"
            style="width: 100%; height: auto"
          />
        </div>
        <div>
          <v-card
            color="#39A2AE"
            :width="'30%'"
            class="elevation-0 d-flex flex-column justify-center align-center pa-4 ga-2 rounded-xl position-absolute right-0 top-0 mr-2"
            ><div
              class="d-flex align-center justify-center text-center font-weight-bold ma-4 text-panelseven"
            >
              Rata-rata upah buruh/karyawan perdesaan Rp 2,4 juta per bulan
            </div>
          </v-card>
        </div>
        <div>
          <v-img
            class="position-absolute left-0 top-0"
            src="https://raw.githubusercontent.com/eki1381/Storytelling/main/poor.png"
            style="width: 50%; height: auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "PanelSeven",
};
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-panelseven {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-panelseven {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #2b4162;
  font-size: 16pt;
  line-height: 1;
}

.text-panelseven {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: white;
  font-size: 16pt;
  line-height: 1;
}

.parent3 {
  background-color: #16a403;
}
</style>