<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <q-card class="q-pa-xs q-pl-md full-width row items-center justify-between" style="border-radius: 15px">
            <span style="font-size: 1.1rem">{{ name }}</span>
            <q-btn round flat dense icon="contrast" @click="$q.dark.toggle()" />
          </q-card>
          <q-card class="q-mt-md q-pa-md full-width row items-center justify-between">
            <div class="col-4" >
              <q-img src="https://cdn.quasar.dev/img/avatar.png" style="width: 90%; height: 90%; border-radius: 10%" />
            </div>
            <div class="col-8 q-pa-xs" style="text-align: right">
              <span style="font-size: 1.1rem;">{{ currentTime }}</span>
              <q-card class="q-pa-sm full-width"  style="border: 1px solid #1976d2; box-shadow: none">
                <div class="row">
                  <div class="col-3" style="text-align: center" >
                    <q-avatar class="full-width q-py-md" size="55px" style="height: 100%; display: flex; align-items: center; justify-content: center; border-radius: 10%; border: 1px solid #1976d2;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-github size-10 lg:size-6 xl:size-8">
                        <path
                          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                          stroke="#1976d2">
                        </path>
                        <path d="M9 18c-4.51 2-5-2-7-2" stroke="#1976d2"></path>
                      </svg>
                    </q-avatar>
                  </div>
                  <div class="col-8 q-pl-sm" style="text-align: left">
                    <div class="text-caption">Latest commit: <a :href="latestCommitUrl" target="_blank" style="color: currentColor">{{ latestCommitHash }}</a></div>
                    <div class="text-caption text-bold">{{ latestCommitMessage }}</div>
                    <div>By: <a href="https://github.com/jopenski99" target="_blank" style="color: currentColor">{{lastContributor}}</a> </div>
                  </div>
                </div>
              </q-card>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PortfolioV2',
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      name: 'John Doe Perez',
      latestCommitUrl: '',
      latestCommitHash: '',
      latestCommitMessage: '',
      lastContributor: ''
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
    this.getLatestCommit();
  },
  methods: {
    getLatestCommit() {
      axios.get('https://api.github.com/repos/jopenski99/axcelion/commits')
        .then(response => {
          const latestCommit = response.data[0];
          this.latestCommitUrl = latestCommit.html_url;
          this.latestCommitHash = latestCommit.sha.substring(0, 7);
          this.latestCommitMessage = latestCommit.commit.message;
          this.lastContributor = latestCommit.commit.author.name;

        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

