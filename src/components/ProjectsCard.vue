<template>
    <q-card class="justify-center text-center full-width">
        
        <div class="text-center q-mt-md q-mb-md" 
        :class="{'text-left' : collapsed}" 
        style="font-size:1.3rem; font-weight:500"> Projects 
            <span :style="{ 'background-color':'#1976d2', color:'#fff', 'border-radius': '50%', padding: '3px 9px', 'font-size': '0.8rem', 'margin-top': '-10px', position: 'absolute' }">{{projects.length}}</span>
        </div>
        <div class="hide-button text-right absolute " @click="collapsed=!collapsed" style="">{{collapsed? 'Show': 'Hide'}}</div>
        <q-card-section class="full-width" v-if="!collapsed">
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                padding infinite :navigation="true" height="auto" class="full-width">
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
import img_url from '../mixins/img_url'
import projectCard from './custom/projectCard.vue';
export default {
    name: "ProjectsCard",
    components: { projectCard },
    mixins: [img_url],
    data() {
        return {
            slide: 0,

            collapsed: false,
            projects: [
                {
                    id: 111,
                    name: 'Surefast',
                    location: 'local',
                    company: {
                        name: "Private",
                        logo_url: null,
                    },
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('surefast.png'),
                    url: null,
                    techs: [
                        'Vue.js', 'Quasar', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 112,
                    name: 'Jaaims',
                    company: {
                        name: "Launcher PTY LTD",
                        logo_url: this.generateImgUrl('jaaims.png'),
                    },
                    location: 'Sydney, Australia',
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('jaaims.png'),
                    url: 'https://www.jaaimsapp.com/',
                    techs: [
                        'Vue.js',  'AWS', 'PWA','Bootstrap'
                    ]
                },
                {
                    id: 113,
                    name: 'Quext',
                    company: {
                        name: "Codev",
                        logo_url: this.generateImgUrl('codev.png'),
                    },
                    location: 'Virginia, USA',
                    backgound_color: '#333',
                    logo: this.generateImgUrl('quext.png'),
                    url: 'https://onequext.com/',
                    techs: [
                        'Vue.js', 'AWS', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 114,
                    name: 'ConX',
                    company: {
                        name: "Eversun",
                        logo_url: this.generateImgUrl('eversun.png'),
                    },
                    location: 'Texas, USA',
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('conx.png'),
                    url: 'https://conx-usa.com/',
                    techs: [
                        'Vue.js', 'Nuxt', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 115,
                    name: 'STL',
                    company: {
                        name: "Private",
                        logo_url: null,
                    },
                    location: 'local',
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('stl.png'),
                    url: null,
                    techs: [
                        'Vue.js', 'Quasar', 'Laravel', 'PWA'
                    ]
                },
                {
                    id: 116,
                    name: 'Wittymanager',
                    location: 'South Korea',
                    company: {
                        name: "Posbang Corp",
                        logo_url: this.generateImgUrl('posbang.png'),
                    },
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('witty.png'),
                    url: 'https://www.witty.team/',
                    techs: [
                        'Vue.js', 'PHP Yii2', 
                    ]
                },
                {
                    id: 117,
                    name: 'Posbang.com',
                    location: 'local',
                    company: {
                        name: "Posbang Corp",
                        logo_url: this.generateImgUrl('posbang.png'),
                    },
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('posbang.png'),
                    url: null,
                    techs: [
                        'Wordpress'
                    ]
                },
                {
                    id: 118,
                    name: 'Jaacs',
                    company: {
                        name: "Launcher PTY LTD",
                        logo_url: this.generateImgUrl('jaaims.png'),
                    },
                    location: 'Sydney, Australia',
                    backgound_color: '#fff',
                    logo: this.generateImgUrl('jaacs.png'),
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                    techs: [
                        'Vue.js','AWS','Quasar'
                    ]
                },
                {
                    id: 119,
                    name: 'Sweepz Portal',
                    company: {
                        name: "Altitude Games",
                        logo_url: null,
                    },
                    location: 'USA & Australia',
                    backgound_color: '#333',
                    logo: this.generateImgUrl('sweepz.png'),
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
            const chunkSize = this.$q.screen.lt.md ? 1 : this.$q.screen.lt.sm ? 2 : 4;
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
<style scoped>
.hide-button:hover{
    color:#1976d2;
}
.hide-button{
    color:#ffffff;
    font-size:1rem;
    font-weight: 500;
    right:15px; 
    top:20px;
}
</style>
