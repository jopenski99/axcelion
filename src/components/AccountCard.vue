<template>
    <q-card class="justify-center text-center q-px-md">
        <q-card-section>
            <q-avatar size="150px" font-size="52px" color="teal" text-color="white" icon="directions" />
        </q-card-section>
        <q-card-section>
            <q-input outlined v-model="name.display" readonly dense class="q-pb-sm" />
            <q-input outlined v-model="career.jobTitle" readonly dense class="q-pb-sm" />
            <q-input outlined v-model="career.level" readonly dense />
        </q-card-section>
        <q-card-section>
            <div class="row fit no-wrap q-gutter-x-sm justify-start items-center q-mb-md">
                <q-separator class="col q-ml-lg" />
                <div class="col-grow ">
                    Skills
                </div>
                <q-separator inset class="col" />
            </div>
            <div class="row full-width " v-for="item in career.skills" :key="item.id">
                <div class="col-7">
                    <q-linear-progress size="lg" :value="item.proficiency" :color="item.color" class="q-mt-sm" />
                </div>
                <div class="col-1 q-ml-sm">
                    {{ (item.proficiency * 10) + "/10" }}
                </div>
                <div class="col-3 q-ml-md">
                    {{ item.name }}
                </div>
            </div>

        </q-card-section>
        <q-card-section>
            <q-timeline layout="dense" color="secondary">
                <q-timeline-entry heading>
                    <span style="font-size: 1.5rem;">
                        Work Experience
                    </span>
                    
                </q-timeline-entry>

                <q-timeline-entry v-for="xp in career.experience" :key="xp.id" :title="xp.company_name" :subtitle="xp.jobTitle" side="left">
                    <div>
                        {{xp.description}}
                    </div>
                </q-timeline-entry>
            </q-timeline>
        </q-card-section>
    </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "AccountsCard",
    setup() {
        const name = {
            first: null,
            last: null,
            middle: null,
            display: "Leo Valdez",
        };
        const career = {
            jobTitle: "Web Developer",
            level: "Senior",
            skills: [
                {
                    id: 111,
                    name: "Vue js",
                    color: 'green-6',
                    proficiency: 0.9,
                },
                {
                    id: 112,
                    name: "Laravel",
                    color: 'red-6',
                    proficiency: 0.8,
                },
                {
                    id: 113,
                    name: "MySQL",
                    color: 'cyan-9',
                    proficiency: 0.8,
                },
                {
                    id: 114,
                    name: "AWS",
                    color: 'orange-9',
                    proficiency: 0.7,
                },
                {
                    id: 115,
                    name: "PHP",
                    color: 'deep-purple-6',
                    proficiency: 0.8,
                },
                {
                    id: 111,
                    name: "Javascript",
                    color: 'yellow-7',
                    proficiency: 0.9,
                },
            ],
            experience: [
                {
                    id: 111,
                    company_name: 'VXI Global Inc',
                    jobTitle: 'Account Associate (3 months)',
                    year: 'October 2016',
                    description: 'Help clients with their concerns making sure that they are happy.'
                },
                {
                    id: 112,
                    company_name: 'Motorjoy Depot Inc',
                    jobTitle: 'IT Assistant (2 years 8 months)',
                    year: 'February 2017',
                    description: 'IT internal support, responsible for troubleshooting computers physical or remote, network problems, server administration, systems administration.'
                },
                {
                    id: 113,
                    company_name: 'Posbang Corp',
                    jobTitle: 'Web Developer (5 months)',
                    year: 'October 2019',
                    description: 'Added features to existing web application and rebuild existing landing site.'
                },
                {
                    id: 114,
                    company_name: 'Eversun Corp Philippines',
                    jobTitle: 'Fullstack Developer (1 year 6 months)',
                    year: 'July 2020',
                    description: 'Create web applications for Clients based from Texas USA for their temporary contractor manpower acquisition idea and have also realize it.'
                },
                {
                    id: 115,
                    company_name: 'Codev Philippines',
                    jobTitle: 'Fullstack Developer (1 year 1 month)',
                    year: 'January 2022',
                    description: 'Additional member of developers gouped as 16 teams that was from around the world to simultaneously create the application conisiting 19+ microservices and one monolithic frontend. '
                }
            ]
        };

        return {
            name,
            career,
        };
    },
});
</script>
