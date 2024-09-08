<template>
  <q-page padding>
    <div class="row">
      <div class="col-4 col-sm-12 col-md-6"> 
          <Camera />
      </div>
      <div class="col-4 col-sm-12 col-md-6"> 
          <Geolocation />
    </div>
    </div>
  </q-page>
</template>

<script>
import Camera from 'src/components/PWA/Camera.vue';
import Geolocation from 'src/components/PWA/Geolocation.vue';
export default {
  name: 'PWA Functions',
  components: {Camera, Geolocation}
  
}
</script>
