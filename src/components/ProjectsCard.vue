<template>
    <q-card class="justify-center text-center ">
        <q-card-section>
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                padding infinite autoplay :navigation="false" height="auto" class="full-width">
                <q-carousel-slide v-for="card in projects" :name="card.id" :key="card.id"
                    class="column no-wrap full-width">
                        <projectCard :project="card" />
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
            projects: [
                {
                    id: 111,
                    name: 'Surefast',
                    location: 'local',
                    backgound_color: '#fff',
                    logo: '/public/surefast.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 112,
                    name: 'Jaaims',
                    location: 'Sydney, Australia',
                    backgound_color: '#fff',
                    logo: '/public/jaaims.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 113,
                    name: 'Quext',
                    location: 'Virginia, USA',
                    backgound_color: '#333',
                    logo: '/public/quext.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 114,
                    name: 'ConX',
                    location: 'Texas, USA',
                    backgound_color: '#fff',
                    logo: '/public/conx.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 115,
                    name: 'STL',
                    location: 'local',
                    backgound_color: '#fff',
                    logo: '/public/stl.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 116,
                    name: 'Wittymanager',
                    location: 'South Korea',
                    backgound_color: '#fff',
                    logo: '/public/witty.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 117,
                    name: 'Posbang.com',
                    location: 'local',
                    backgound_color: '#fff',
                    logo: '/public/posbang.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 118,
                    name: 'Jaacs',
                    location: 'Sydney, Australia',
                    backgound_color: '#fff',
                    logo: '/public/jaacs.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
                {
                    id: 119,
                    name: 'Sweepz Portal',
                    location: 'USA & Australia',
                    backgound_color: '#333',
                    logo: '/public/sweepz.png',
                    url: 'https://picsum.photos/500/300?t=' + Math.random(),
                },
            ],
            projectList: [],
        };
    },
    computed: {
        projectList() {
            return this.projects.reduce((resultArray, item, index) => { 
                const chunkIndex = Math.floor(index / 4);
                
                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [];
                }
                
                resultArray[chunkIndex].push(item);
                
                return resultArray;
            });

        }
    },
};
</script>
