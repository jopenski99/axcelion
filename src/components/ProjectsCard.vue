<template>
    <q-card class="justify-center text-center">
        <q-card-section>
            <div class="row full-width " v-for="row, ind in projectList" :key="ind">
                <div class="col q-pa-md flex justify-center   " v-for="proj in row" :key="proj.id">
                    <div class="text-center" style="width: 100px;">
                        <q-avatar class="q-mb-md" size="100px" square color="primary" text-color="white">{{ proj.name[0]
                        }}</q-avatar>
                        <br />
                        <span class="text-center">{{ proj.name }}</span>
                        <br />
                        <span style="font-size:12px" class="text-center">{{ proj.location }}</span>
                    </div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>
<script>
import { defineComponent, computed, onMounted } from "vue";

export default defineComponent({
    name: "ProjectsCard",

    setup() {
        const projects = [
            {
                id: 111,
                name: 'Surefast',
                location: 'local',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
            {
                id: 112,
                name: 'Jaaims',
                location: 'Sydney, Australia',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
            {
                id: 113,
                name: 'Quext',
                location: 'Virginia, USA',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
            {
                id: 114,
                name: 'ConX',
                location: 'Texas, USA',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
            {
                id: 115,
                name: 'STL',
                location: 'local',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
            {
                id: 116,
                name: 'Wittymanager',
                location: 'Korea',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
            {
                id: 117,
                name: 'Posbang.com',
                location: 'local',
                url: 'https://picsum.photos/500/300?t=' + Math.random(),
            },
        ];
        const projectList = computed(() => {
            let ret = []
            let row = []
            let control = Math.floor(Math.random() * (4 - 3 + 1) + 3)
            projects.forEach((proj, index) => {
                row.push(proj)
                if ((index != 0 && index % control == 0) || index == projects.length) {
                    ret.push(row)
                    row = []
                }
            })
            return ret
        })
        return {
            projects,
            projectList
        };
    },
});
</script>
