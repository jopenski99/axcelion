<template>
    <q-card class="q-pa-md full-width">
        <q-card-section>
            <div class="text-h6">Use Geolocation</div>
            <div id="map" class="full-width" style="height: 300px;"></div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn color="primary" @click="getLocation" label="Get location" />
        </q-card-actions>
    </q-card>
</template>

<script>

import L from 'leaflet'
import 'leaflet-css/dist/leaflet.css'



export default {
    name: 'Geolocation',
    data() {
        return {
            map: null,
            marker: null,
            location: null,
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 10,
        }
    },
    mounted() {
        this.map = this.$refs.map
        console.log(this.map)
        this.map = new L.Map('map').setView([51.505, -0.09], 13);
        new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            subdomains: ['a', 'b', 'c']
        }).addTo(this.map);

    },
    methods: {
        onReady() {
            console.log('on ready')
            this.map = this.$refs["map"].mapObject;
            this.map.locate();
        },
        onLocationFound(l) {
            console.log('location found')
            console.log(l);
            this.location = l;
            this.markerLatLng = [l.latitude, l.longitude]
            this.map.setView(new L.LatLng(l.latitude, l.longitude), 20);


        },
        async getLocation() {
            console.log('getting location')
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        this.location = position.coords
                        if (this.marker) {
                            this.map.removeLayer(this.marker)
                        }
                        this.marker = new L.Marker([this.location.latitude, this.location.longitude], {icon : L.icon({
                                iconUrl: '/marker-icon.png',
                                iconSize: [20, 30], // size of the icon
                                iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
                            }),}).addTo(this.map);
                        this.map.setView([this.location.latitude, this.location.longitude]);
                    }, (error) => {
                        console.error(error)
                    })
                } else {
                    console.error('Geolocation is not supported by this browser.')
                }
            } catch (err) {
                console.log(err)
                this.$q.notify({
                    message: 'Geolocation permission denied',
                    color: 'negative',
                    position: 'top',
                    timeout: 2000
                })
            }
        },
    }
}
</script>
