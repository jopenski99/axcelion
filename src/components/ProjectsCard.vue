<template>
    <q-card class="justify-center text-center full-width">
        <q-card-section class="full-width">
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                padding infinite autoplay :navigation="false" height="auto" class="full-width">
                <q-carousel-slide v-for="(group, index) in chunkedProjects" :name="index" :key="index"
                    class="column no-wrap full-width">
                    <div class="row full-width justify-around">
                        <div class="col-lg-3 col-md-6 col-12 justify-center q-px-sm" v-for="card in group" :key="card.id">
                            <div class="flex justify-center">
                                <projectCard :project="card" />
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </q-card-section>
    </q-card>
</template>
<script>
import projectCard from './custom/projectCard.vue';
export default {
    name: "ProjectsCard",
    components: { projectCard },
    data() {
        return {
            slide: 0,
            projects: [
                {
                    id: 111,
                    name: 'Surefast',
                    location: 'local',
                    backgound_color: '#fff',
                    logo: '/public/surefast.png',
                    url: null,
                    techs: [
                        'Vue.js', 'Quasar', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 112,
                    name: 'Jaaims',
                    location: 'Sydney, Australia',
                    backgound_color: '#fff',
                    logo: '/public/jaaims.png',
                    url: 'https://www.jaaimsapp.com/',
                    techs: [
                        'Vue.js',  'AWS', 'PWA','Bootstrap'
                    ]
                },
                {
                    id: 113,
                    name: 'Quext',
                    location: 'Virginia, USA',
                    backgound_color: '#333',
                    logo: '/public/quext.png',
                    url: 'https://onequext.com/',
                    techs: [
                        'Vue.js', 'AWS', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 114,
                    name: 'ConX',
                    location: 'Texas, USA',
                    backgound_color: '#fff',
                    logo: '/public/conx.png',
                    url: 'https://conx-usa.com/',
                    techs: [
                        'Vue.js', 'Nuxt', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 115,
                    name: 'STL',
                    location: 'local',
                    backgound_color: '#fff',
                    logo: '/public/stl.png',
                    url: null,
                    techs: [
                        'Vue.js', 'Quasar', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 116,
                    name: 'Wittymanager',
                    location: 'South Korea',
                    backgound_color: '#fff',
                    logo: '/public/witty.png',
                    url: 'https://www.witty.team/',
                    techs: [
                        'Vue.js', 'PHP Yii2', 
                    ]
                },
                {
                    id: 117,
                    name: 'Posbang.com',
                    location: 'local',
                    backgound_color: '#fff',
                    logo: '/public/posbang.png',
                    url: null,
                    techs: [
                        'Wordpress'
                    ]
                },
                {
                    id: 118,
                    name: 'Jaacs',
                    location: 'Sydney, Australia',
                    backgound_color: '#fff',
                    logo: '/public/jaacs.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                    techs: [
                        'Vue.js','AWS','Quasar'
                    ]
                },
                {
                    id: 119,
                    name: 'Sweepz Portal',
                    location: 'USA & Australia',
                    backgound_color: '#333',
                    logo: '/public/sweepz.png',
                    url: 'https://www.sweepz.com/',
                    techs: [
                        'Vue.js','AWS','Quasar','Laravel'
                    ]
                },
            ],
        };
    },
    computed: {
        chunkedProjects() {
            const chunkSize = 4;
            return this.projects.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / chunkSize);
                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [];
                }
                resultArray[chunkIndex].push(item);
                return resultArray;
            }, []);
        }
    },
};
</script>
