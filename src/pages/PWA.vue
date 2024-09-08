<template>
  <q-page padding>
    <div class="row gutter-md">
      <div class="col-xs-12 col-md-4 q-pa-md">
        <Camera />
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <Geolocation />
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <Notification />
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <WebAuthn />
      </div> 
      <div class="col-xs-12 col-md-4 q-pa-md">
        <Barcode />
      </div>
    </div>
  </q-page>
</template>

<script>
import Barcode from 'src/components/PWA/Barcode.vue';
import Camera from 'src/components/PWA/Camera.vue';
import Geolocation from 'src/components/PWA/Geolocation.vue';
import Notification from 'src/components/PWA/Notification.vue';
import WebAuthn from 'src/components/PWA/WebAuthn.vue';
export default {
  name: 'PWA Functions',
  components: { Camera, Geolocation,Notification, WebAuthn, Barcode }

}
</script>
