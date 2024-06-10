<template>
  <div class="h-screen w-screen d-flex flex-column pa-12 ga-6">
    <div class="d-flex flex-column ga-4">
      <div class="title-panelfour font-weight-black">
        Sejarah mencatat migrasi telah dilakukan penduduk Indonesia sejak zaman
        kolonial
      </div>
      <div class="subtitle-panelfour font-weight-normal">
        Pemerintah Indonesia berupaya untuk melakukan pendistribusian jumlah
        penduduk melalui program transmigrasi
      </div>
    </div>
    <div>
      <v-timeline>
        <v-timeline-item dot-color="#71B48D" size="x-small" fill-dot>
          <template v-slot:opposite>
            <v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/periode_kolonialisme.jpg"
            ></v-img>
          </template>
          <v-card variant="tonal"
            ><v-card-item
              ><v-card-title>PERIODE KOLONISASI</v-card-title
              ><v-card-subtitle>1905-1941</v-card-subtitle>
              <v-card-text
                >Dilatarbelakangi "Politik Balas Budi" oleh Van Deventer,
                kemelaratan Pulau Jawa akibat kerja paksa mendorong Pemerintah
                Hindia Belanda untuk memindahkan penduduk dari Pulau Jawa ke
                Pulau Sumatera. Sejumlah 189.938 jiwa berhasil dipindahkan
                selama periode tersebut. Meskipun demikian, capaian jumlah
                tersebut masih jauh di bawah angka target awal, yaitu sekitar
                80.000 keluarga per tahun.</v-card-text
              >
            </v-card-item></v-card
          >
        </v-timeline-item>
        <v-timeline-item dot-color="#71B48D" size="x-small" fill-dot>
          <template v-slot:opposite
            ><v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/periode_orde_lama.jpeg"
            ></v-img
          ></template>
          <v-card variant="tonal"
            ><v-card-item
              ><v-card-title>PERIODE ORDE LAMA</v-card-title
              ><v-card-subtitle>1945-1968</v-card-subtitle>
              <v-card-text
                >Pasca kemerdekaan, amanat program transmigrasi dituangkan dalam
                Garis-Garis Besar Haluan Negara (GBHN) bertujuan untuk
                penyebaran penduduk. Pada periode tersebut, pemerintah berhasil
                memindahkan <b>394.524 jiwa</b> atau
                <b>98.631 KK</b>.</v-card-text
              >
            </v-card-item></v-card
          >
        </v-timeline-item>
        <v-timeline-item dot-color="#71B48D" size="x-small" fill-dot>
          <template v-slot:opposite
            ><v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/periode_orde_baru.jpeg"
            ></v-img
          ></template>
          <v-card variant="tonal"
            ><v-card-item
              ><v-card-title>PERIODE PELITA</v-card-title
              ><v-card-subtitle>1969-1999</v-card-subtitle>
              <v-card-text
                >Dilatarbelakangi kebijakan pada masa orde baru, yaitu
                transmigrasi dijadikan prioritas nasional yang dituangkan dalam
                program Rencana Pembangunan Lima Tahun (Pelita).
                <v-list lines="one" style="background-color: transparent">
                  <v-list-item
                    >Pelita I (1969-1974):
                    <b>163.624 jiwa/40.906 KK</b></v-list-item
                  >
                  <v-list-item
                    >Pelita II (1974-1979):
                    <b>366.429 jiwa/82.959 KK</b></v-list-item
                  >
                  <v-list-item
                    >Pelita III (1979-1984):
                    <b>1.346.890 jiwa/337.761 KK</b></v-list-item
                  >
                  <v-list-item
                    >Pelita IV (1984-1989):
                    <b>2.256.255 jiwa/750.150 KK</b></v-list-item
                  >
                  <v-list-item
                    >Pelita V (1989-1994):
                    <b>1.175.072 jiwa/265.259 KK</b></v-list-item
                  >
                  <v-list-item
                    >Pelita VI (1994-1999):
                    <b>1.400.256 jiwa/350.064 KK</b></v-list-item
                  >
                </v-list>
              </v-card-text>
            </v-card-item></v-card
          >
        </v-timeline-item>
        <v-timeline-item dot-color="#71B48D" size="x-small" fill-dot>
          <template v-slot:opposite
            ><v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              src="https://raw.githubusercontent.com/eki1381/Storytelling/main/periode_reformasi.jpeg"
            ></v-img
          ></template>
          <v-card variant="tonal"
            ><v-card-item
              ><v-card-title>PERIODE REFORMASI</v-card-title
              ><v-card-subtitle>2000-sekarang</v-card-subtitle>
              <v-card-text
                >Dilatarbelakangi pemerataan pembangunan daerah untuk mendorong
                persebaran penduduk dan tenaga kerja, serta meningkatkan
                kesejahteraan masyarakat kawasan baru. Hingga 2022, sebanyak
                <b>515.319 jiwa/129.424 KK</b> berhasil
                dipindahkan.</v-card-text
              >
            </v-card-item></v-card
          >
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PanelFive",
};
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.title-panelfour {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #fa7921;
  font-size: 32pt;
  line-height: 1;
}

.subtitle-panelfour {
  font-family: "Barlow", sans-serif;
  font-style: normal;
  color: #201e1f;
  font-size: 16pt;
  line-height: 1;
}
</style>