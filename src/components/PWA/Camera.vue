<template>
    <q-card class="q-pa-md  full-width">
        <q-card-section>
          <div class="text-h6">Use Camera</div>
          <video v-show="stream" ref="video" class="full-width" autoplay @canplay="onVideoLoaded"
            @loadedmetadata="onVideoLoad" />
          <img v-if="image" :src="image" class="full-width" />
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn color="primary" label="Use Camera" @click="useCamera" />
          <q-btn color="primary" label="Capture" :disabled="!stream" @click="captureImage" />
          <q-btn color="primary" label="Close" :disabled="!stream" @click="stream = null, image = null" />
        </q-card-actions>
      </q-card>
</template>
<script>
export default {
    name: 'Camera',
    data() {
        return {
            stream: null,
            image: null,
            videoRef: null
        }
    },
    mounted() {
        this.videoRef = this.$refs.video
    },
    watch: {
        stream: function (newVal) {
            this.$refs.video.srcObject = newVal
        }
    },
    methods: {
        async useCamera() {
            try {
                this.stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        },
        captureImage() {
            const canvas = document.createElement('canvas');
            canvas.width = this.$refs.video.videoWidth;
            canvas.height = this.$refs.video.videoHeight;
            canvas.getContext('2d').drawImage(this.$refs.video, 0, 0);
            this.image = canvas.toDataURL('image/png');
        }
    }
}
</script>