<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-3">
          <q-card class="q-pa-xs q-pl-md full-width row items-center justify-between" style="border-radius: 15px">
            <span style="font-size: 1.1rem">{{ name }}</span>
            <q-btn
              round
              flat
              dense
              icon="contrast"
              @click="$q.dark.toggle()"
            />
          </q-card>
          <q-card class="q-mt-md q-pa-md full-width row items-center justify-between">
            <div class="col-4">
              <q-img src="https://cdn.quasar.dev/img/avatar.png" style="width: 90%; height: 90%; border-radius: 10%"/>
            </div>
           <div class="col-8" style="position: relative">
             <span style="font-size: 1.1rem; position: absolute; top: 0; right: 0">{{ currentTime }}</span>
           </div>
          </q-card>
        </div>
      </div>
    <!--   <q-card class="q-pa-md full-width">
        <q-card-section>
          <div class="text-h6">Portfolio</div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-12 col-md-4">
              <q-img src="https://cdn.quasar.dev/img/avatar.png" style="width: 250px; height: 250px; border-radius: 10%"/>
            </div>
            <div class="col-12 col-md-8">
              <div class="text-subtitle2">John Doe Perez</div>
              <div class="text-caption">Software Engineer</div>
              <div class="text-caption">Tools: Vue.js, Node.js, Laravel, AWS, PWA</div>
              <div class="text-caption">Programming languages: JavaScript, PHP, HTML, CSS</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Work Experience</div>
        </q-card-section>
        <q-card-section>
          <div v-for="xp in workExperience" :key="xp.id">
            <div class="text-subtitle2">{{xp.company_name}} ({{xp.jobTitle}})</div>
            <div class="text-caption">{{xp.description}}</div>
          </div>
        </q-card-section>
      </q-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioV2',
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      name: 'John Doe Perez',
      workExperience: [
        {
          id: 1,
          company_name: 'Eversun Software Philippines Corp',
          jobTitle: 'Full Stack Developer',
          description: 'Worked on 2 projects: an E-learning application that caters educational resources for students, and a Manpower Loaning and Renting Application for both users and administrators.'
        },
        {
          id: 2,
          company_name: 'Axcelion',
          jobTitle: 'Software Engineer',
          description: 'Worked on a project that uses Vue.js and Laravel as our backend, and was responsible for storing and retrieving educational resources, as well as providing a user-friendly interface for users to access the resources.'
        },
        {
          id: 3,
          company_name: 'Freelance',
          jobTitle: 'Web Developer',
          description: 'Worked on a project that uses Vue.js and Laravel as our backend, and was responsible for storing and retrieving educational resources, as well as providing a user-friendly interface for users to access the resources.'
        }
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
}
</script>

