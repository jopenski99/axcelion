<template>
  <q-card class="q-pa-md full-width">
    <q-card-section>
      <div class="text-h6">Use Barcode/QR Reader</div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" label="Scan" @click="scanBarcode" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  methods: {
   /*  async scanBarcode() {
      const scanner = new Instascan.Scanner({
        video: document.getElementById('preview'),
        scanPeriod: 5,
        mirror: false,
        captureQuality: window.innerWidth,
      });
      scanner.addListener('scan', content => {
        console.log(content);
      });
      Instascan.Camera.getCameras().then(cameras => {
        if (cameras.length > 0) {
          scanner.camera = cameras[0];
          scanner.start();
        } else {
          console.error('No cameras found.');
        }
      }).catch(error => {
        console.error(error);
      });
    }, */
  },
};
</script>

<style scoped>
#preview {
  width: 100%;
  height: 300px;
}
</style>
