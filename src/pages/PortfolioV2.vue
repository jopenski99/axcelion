<template>
  <div class="row">
    <div class="col-12">
      <div class="row" :class="{ 'q-col-gutter-x-md': $q.screen.gt.md || $q.screen.gt.sm || $q.screen.gt.xs, }">
        <div class="col-12 col-sm-6 col-md-4 ">
          <q-card class="q-pa-xs q-pl-md full-width row items-center justify-between" style="border-radius: 15px">
            <span style="font-size: 1.1rem">{{ name }}</span>
            <q-btn round flat dense icon="contrast" @click="$q.dark.toggle()" />
          </q-card>
          <q-card class="q-mt-md q-pa-md full-width row items-start justify-center" style="border-radius: 15px">
            <div class="col-12" style="text-align: right"> <span style="font-size: 1.1rem;">{{ currentTime }}</span>
            </div>
            <div class="col-12 col-md-5 text-center justify-center">
              <div class="row full-width q-py-sm q-px-md">
                <img :src="'./2.jpg'" style="width: 100%; height: 90%; border-radius: 10%" />
              </div>
              <div class="row q-pt-md q-pl-md justify-start items-center">
                <div
                  :class="{ 'pingdot-green': settings.is_seeking == true, 'pingdot-red': settings.is_seeking == false }">
                </div>
                <span class="q-ml-md" style="font-size: 0.9rem; font-family: 'OCR A';">Seeking opportunities</span>
              </div>
            </div>
            <div class="col-12 col-md-7 q-pa-xs flex" style="align-content: end;
    height: 230px;">
              <q-card class="q-pa-sm full-width"
                style="border: 1px solid #1976d2; box-shadow: none;border-radius: 15px">
                <div class="row">
                  <div class="col-3 items-center justify-center" style="text-align: center; ">
                    <q-avatar
                      style="border-radius: 15px; justify-self:center; display: flex; align-items: center; justify-content: center; border-radius: 10%; border: 1px solid #1976d2; width:60px;height:60px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
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
                    <div class="text-caption">Latest commit: <a :href="latestCommitUrl" target="_blank"
                        style="color: currentColor">{{ latestCommitHash }}</a></div>
                    <div class="text-caption text-bold">{{ latestCommitMessage }}</div>
                    <div>By: <a href="https://github.com/jopenski99" target="_blank" style="color: currentColor">{{
                      lastContributor }}</a> </div>
                  </div>
                </div>
              </q-card>
              <div class="q-mt-sm full-width" style="    height: 80px !important;">
                <iframe style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/1RKUoGiLEbcXN4GY4spQDx?utm_source=generator" width="100%"
                  height="145" frameBorder="0" allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
              </div>
            </div>
            <div class="col-12 q-pt-md q-pa-md">
              <p class="text-justify" style="font-size: 1rem">
                I'm a <a href="https://en.wikipedia.org/wiki/Web_developer" class="text-bold"
                  style="color: #1976d2; text-decoration: none;">web developer</a> who loves to build and maintain web
                applications. I'm passionate about using the
                latest technologies and following best practices to ensure my code is clean and maintainable. I'm always
                looking to learn new things and improve my skills. Making sure that clients are satisfied.</p>
            </div>
          </q-card>
          <q-card @click="languageContainerExpand ? languageContainerExpand = false : languageContainerExpand = true"
            class="q-pa-sm q-mt-md full-width row items-center justify-between" style="border-radius: 15px">
            <div v-if="!languageContainerExpand" class="full-width row inline no-wrap" style="">
              <div id='container'>
                <div class='scroll'>
                  <div v-for="(lang, index) in languagesWithThemeColor" :key="index" class="col-auto inline-block item">
                    <q-btn class="q-px-sm" size="sm" :href="lang.link" rounded target="_blank" dense flat unelevated
                      :style="'background-color: ' + lang.color + ';'">
                      <img :src="lang.logo" alt=""
                        style="width: 15px; height: 15px; filter: invert(0); border-radius:25%" />
                      <div class="q-ml-sm"
                        :style="'font-size: 0.7rem; color: ' + ($q.dark.isActive ? '#FFF' : '#000') + ';'">{{ lang.name
                        }}</div>
                    </q-btn>
                  </div>
                </div>
                <q-tooltip v-if="!languageContainerExpand" content-class="bg-grey-8 text-white" anchor="top middle"
                  self="bottom middle">
                  Click to expand
                </q-tooltip>
                <div class='fade'
                  :style="'background: linear-gradient(90deg,' + scrollShadowControl + ',transparent 30%,transparent 90%,' + scrollShadowControl + ');'">
                </div>
              </div>
            </div>
            <div v-else class="full-width row" style="">
              <div v-for="(lang, index) in languagesWithThemeColor" :key="index" class="col-auto q-ma-xs">
                <q-btn class="q-px-sm" size="sm" :href="lang.link" rounded target="_blank" dense flat unelevated
                  :style="'background-color: ' + lang.color + ';'">
                  <img :src="lang.logo" alt=""
                    style="width: 15px; height: 15px; filter: invert(0); border-radius:25%" />
                  <div class="q-ml-sm"
                    :style="'font-size: 0.7rem; color: ' + ($q.dark.isActive ? '#FFF' : '#000') + ';'">{{ lang.name }}
                  </div>
                </q-btn>
              </div>
            </div>
            <q-tooltip v-if="languageContainerExpand" content-class="bg-grey-8 text-white" anchor="top middle"
              self="bottom middle">
              Click to go back in simple mode
            </q-tooltip>
          </q-card>
          <q-card class="q-mt-md q-mb-md q-pa-xs q-pl-md full-width row items-center justify-between"
            style="border-radius: 15px">
            <div class="row full-width q-gutter-x-md items-center q-ma-xs">
              <div class="col-1">Socials</div>
              <div class="col-8">
                <div class="row-inline q-gutter-x-md">
                  <div class="col-8">
                    <q-btn round flat dense class="q-pa-md q-mx-xs sc-button" href="https://facebook.com/kim.jopen"
                      target="_blank">
                      <q-avatar class="sc-icon" id="fb" size="md" font-size="19px" icon="mdi-facebook" />
                    </q-btn>
                    <q-btn round flat dense class="sc-button  q-mx-xs"
                      href="https://www.linkedin.com/in/john-paul-perez-74a0391b3/" target="_blank">
                      <q-avatar class="sc-icon" id="li" size="md" font-size="19px" icon="mdi-linkedin" />
                    </q-btn>
                    <q-btn round flat dense class="sc-button  q-mx-xs" href="https://www.instagram.com/kimoy_17/"
                      target="_blank">
                      <q-avatar class="sc-icon" id="ig" size="md" font-size="19px" icon="mdi-instagram" />
                    </q-btn>
                    <q-btn round flat dense class="sc-button  q-mx-xs" href="https://github.com/jopenski99"
                      target="_blank">
                      <q-avatar class="sc-icon" id="gh" size="md" font-size="19px" icon="mdi-github" />
                    </q-btn>
                    <q-btn round flat dense class="sc-button  q-mx-xs"
                      href="https://open.spotify.com/user/22r4lyy76vu47konrfirev35y" target="_blank">
                      <q-avatar class="sc-icon" id="sp" size="md" font-size="19px" icon="mdi-spotify" />
                    </q-btn>
                    <q-btn round flat dense class="sc-button  q-mx-xs" href="https://discordapp.com/users/jopenski99"
                      target="_blank">
                      <q-avatar class="sc-icon" id="di" round size="md" font-size="20px" icon="mdi-discord" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
          <q-card class="q-mt-md q-mb-md q-pa-xs q-px-sm full-width row items-center justify-between"
            style="border-radius: 15px">
            <div class="row full-width q-gutter-x-md q-ma-xs text-center justify-center">
              <iframe src="https://www.chatbase.co/chatbot-iframe/E8pmShbCvb5lbViKYE39J" width="100%"
                style="height: 100%; min-height: 700px; margin: 0px; border-radius:15px;" frameborder="0" ></iframe>
              <!-- <div class="col-12" style="margin:0px;"><span style="font-size: 1rem; font-weight: 500; ">Contact</span>
              </div>
              <div class="col-12 full-width q-gutter-x-md" style="margin:0px;">
                 <div class="row  q-pa-sm full-width">
                  <div v-for="contact in contacts" :key="contact.value"
                    class="col-12 col-sm-6 col-md-4   items-center q-pa-xs ">
                    <a class="contact-button" :href="'mailto:' + contact.value" v-if="contact.type == 'email'">
                      <div class="row q-pa-sm" :style="{'background-color': $q.dark.isActive ? 'rgb(51, 51, 51)' : 'rgb(188,188,188)', 'border-radius': '15px'}">
                        <div class="col-5" style="width:40%">Icon</div>
                        <div class="col-7 justify-center text-center" style="width:55%">{{ contact.name }}</div>
                      </div>
                    </a>
                    <a class="contact-button" :href="'tel:' + contact.value" v-if="contact.type == 'sms'">
                      <div class="row q-pa-sm" :style="{'background-color': $q.dark.isActive ? 'rgb(51, 51, 51)' : 'rgb(188,188,188)', 'border-radius': '15px'}">
                        <div class="col-5" style="width:40%">Icon</div>
                        <div class="col-7 justify-center text-center" style="width:55%">{{ contact.name }}</div>
                      </div>
                    </a>
                    <a class="contact-button" :href="'mailto:' + contact.value" v-if="contact.type == 'tel'">
                      <div class="row q-pa-sm" :style="{'background-color': $q.dark.isActive ? 'rgb(51, 51, 51)' : 'rgb(188,188,188)', 'border-radius': '15px'}">
                        <div class="col-5" style="width:40%">Icon</div>
                        <div class="col-7 justify-center text-center" style="width:55%">{{ contact.name }}</div>
                      </div>
                    </a>
                    <a class="contact-button" :href="'mailto:' + contact.value" v-if="contact.type == 'app'">
                      <div class="row q-pa-sm" :style="{'background-color': $q.dark.isActive ? 'rgb(51, 51, 51)' : 'rgb(188,188,188)', 'border-radius': '15px'}">
                        <div class="col-5" style="width:40%">Icon</div>
                        <div class="col-7 justify-center text-center" style="width:55%">{{ contact.name }}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> -->
              
            </div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-8 ">
          <div class="full-width ">
            <q-card class="q-pa-xs q-pl-md full-width row items-center" style="border-radius: 15px">
              <ProjectsCard />
            </q-card>
            <q-card class="q-pa-md full-width q-mt-md" style="border-radius: 15px">
              <q-timeline color="primary" style=" height:75vh; overflow-y: scroll; " class="q-pa-md">
                <q-timeline-entry title="Development Consultant (JAAIMS) March 2023 - Sept 2025" icon="laptop"
                  side="left">
                  <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                    label="Key roles: Dev Management, Frontend, Backend (Part time)"
                    header-class="bg-primary text-white" expand-icon-class="text-white">
                    <div class="q-pa-md">
                      <div>
                        As a Development Consultant, I manage a team of developers to design and implement upcoming
                        features,
                        ensuring that the system is scalable for future updates. I also provide technical guidance to
                        help
                        clients make informed decisions regarding the technology stack and architecture of the
                        application.
                      </div>
                      <div class="q-mt-md">
                        Tools used in this role:
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>AWS Lambda</li>
                              <li>DynamoDb</li>
                              <li>API Gateway</li>
                              <li>Amplify</li>
                              <li>Cognito</li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul>
                              <li>Pipeline</li>
                              <li>Codecommit</li>
                              <li>Vue js</li>
                              <li>PWA</li>
                              <li>Quasar</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-expansion-item>
                </q-timeline-entry>
                <q-timeline-entry title="Fullstack Developer (Altitude Games) Aug 2023 - Oct 2024" icon="laptop"
                  side="left">
                  <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                    label="Key roles: Dev Management, Frontend, Backend (Full time)"
                    header-class="bg-primary text-white" expand-icon-class="text-white">
                    <div class="q-pa-md"><!--  -->
                      <div>
                        As a Fullstack Developer, I developed a web portal for games made by the company. The web portal
                        allows users to view and interact with the games, as well as manage their accounts and access
                        other
                        features. I was responsible for designing and implementing the frontend and backend of the web
                        portal,
                        ensuring that the system was scalable for future updates. I also worked closely with the game
                        developers
                        to ensure that the web portal integrated seamlessly with the games.
                      </div>
                      <div class="q-mt-md">
                        Tools used in this role:
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>AWS Amplify</li>
                              <li>Laravel</li>
                              <li>Playfab</li>
                              <li>PWA</li>
                              <li>Vue2</li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul>
                              <li>Quasar</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </q-expansion-item>
                </q-timeline-entry>
                <q-timeline-entry title="Head of Development (JAAIMS) March 2023 - Dec 2024" icon="laptop" side="left">
                  <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                    label="Key roles: Dev Management, Frontend, Backend (Full time)"
                    header-class="bg-primary text-white" expand-icon-class="text-white">
                    <div class="q-pa-md">
                      <div>
                        As the Lead Developer, I managed a team of developers to design and implement two applications,
                        the
                        Main
                        App and the Admin Portal. The Main App is a web application that allows users to view and
                        interact
                        with
                        their data, while the Admin Portal is a web application that allows administrators to manage the
                        data
                        and configure the system. My team and I were responsible for ensuring that the system was
                        scalable
                        for
                        future updates and that the technology stack and architecture of the application were
                        appropriate
                        for
                        the needs of the business. We worked closely with the stakeholders to ensure that the
                        applications
                        met
                        their needs and were delivered on time and within budget. My responsibilities included:
                        - Managing the development team to ensure that the project was completed on time and to a high
                        standard
                        - Providing technical guidance to the team to ensure that the application was scalable and
                        maintainable
                        - Ensuring that the technology stack and architecture of the application were appropriate for
                        the
                        needs
                        of the business
                        - Working closely with the stakeholders to ensure that the application met their needs and was
                        delivered
                        on time and within budget
                        - Ensuring that the application was tested thoroughly to ensure that it was of high quality and
                        met
                        the
                        needs of the business
                        - Providing support and maintenance to the application after it was deployed to ensure that it
                        continued
                        to meet the needs of the business
                      </div>
                      <div class="q-mt-md">
                        Tools used in this role:
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>AWS Lambda</li>
                              <li>DynamoDb</li>
                              <li>API Gateway</li>
                              <li>Amplify</li>
                              <li>Cognito</li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul>
                              <li>Pipeline</li>
                              <li>Codecommit</li>
                              <li>Vue js</li>
                              <li>PWA</li>
                              <li>Quasar</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </q-expansion-item>
                </q-timeline-entry>
                <q-timeline-entry title="Lead Developer (CoDev) Jan 2022 - Feb 2023" icon="laptop" side="left">
                  <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                    label="Key roles: Dev Management, Frontend, Backend (Full time)"
                    header-class="bg-primary text-white" expand-icon-class="text-white">
                    <div class="q-pa-md">
                      <div>
                        As the Lead Developer, I was responsible for working on 1 out of 22 microservices as a
                        monolithic
                        frontend using Vue JS and Laravel as our backend. The service I worked on was responsible for
                        catering
                        incoming client's inquiry on a specific apartment in the community, storing it as a lead, and
                        eventually
                        making an accurate calculation to recommend available apartments or rooms for clients. My team
                        and
                        I
                        were responsible for ensuring that the system was scalable for future updates and that the
                        technology
                        stack and architecture of the application were appropriate for the needs of the business. We
                        worked
                        closely with the stakeholders to ensure that the application met their needs and was delivered
                        on
                        time
                        and within budget. My responsibilities included: Lead my team of developers and QA. Recreate
                        entire microservice.
                        Adding new feature, Debugging, Integrating with the other microservices.

                      </div>
                      <div class="q-mt-md">
                        Tools used in this role:
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>AWS Jenkins</li>
                              <li>Argo CD</li>
                              <li>Vue JS</li>
                              <li>Laravel</li>
                              <li>Cognito</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-expansion-item>
                </q-timeline-entry>
                <q-timeline-entry title="Full Stack Developer (Eversun Software Philippines Corp) March 2020 - Jan 2022"
                  icon="laptop" side="left">
                  <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                    label="Key roles: Dev Management, Frontend, Backend (Full time)"
                    header-class="bg-primary text-white" expand-icon-class="text-white">
                    <div class="q-pa-md">
                      <div>
                        As a Full Stack Developer, I was responsible for working on 2 projects: an E-learning
                        application
                        that
                        caters educational resources for students, and a Manpower Loaning and Renting Application for
                        both
                        users
                        and administrators. The E-learning application was built using Vue JS and Laravel as our
                        backend,
                        and
                        was responsible for storing and retrieving educational resources, as well as providing a
                        user-friendly
                        interface for users to access the resources. The Manpower Loaning and Renting Application was
                        built
                        using Vue JS and Laravel as our backend, and was responsible for allowing users to apply for
                        loans
                        and
                        rentals, and for administrators to manage the applications and provide approvals. My team and I
                        were
                        responsible for ensuring that the system was scalable for future updates and that the technology
                        stack
                        and architecture of the applications were appropriate for the needs of the business. We worked
                        closely
                        with the stakeholders to ensure that the applications met their needs and were delivered on time
                        and
                        within budget. My responsibilities included: Discussion with the clients in regards with the
                        project's concern or progess.
                        Adding new features, Create the database structure for the entire operation.
                      </div>
                      <div class="q-mt-md">
                        Tools used in this role:
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>Google Cloud Computing</li>
                              <li>Putty</li>
                              <li>Nuxt Vue JS</li>
                              <li>Laravel</li>
                              <li>PWA</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-expansion-item>
                </q-timeline-entry>

                <q-timeline-entry title="Full Stack Developer (PosBang Corp) Oct 2019 - March 2020"
                  subtitle="Key roles: Dev Management, Frontend, Backend (Full time)" icon="laptop" side="left">
                  <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                    label="Key roles: Dev Management, Frontend, Backend (Full time)"
                    header-class="bg-primary text-white" expand-icon-class="text-white">
                    <div class="q-pa-md">
                      <div>
                        As a Full Stack Developer, I was responsible for working on 2 projects: A Landing site for our
                        company's main product (POS), and Employee Management Application for both users and
                        administrators.
                        My
                        responsibilities included: Maintaining site, Adding new features, Decluttering codes and
                        optimize
                        UI/UX
                      </div>
                      <div class="q-mt-md">
                        Tools used in this role:
                        <div class="row">
                          <div class="col-6">
                            <ul>
                              <li>Google Cloud Computing</li>
                              <li>Putty</li>
                              <li>Vuejs</li>
                              <li>Php Yii2</li>
                              <li>Wordpress</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-expansion-item>
                </q-timeline-entry>
              </q-timeline>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import auth from '../api/spine/auth'
import img_url from '../mixins/img_url'
import ProjectsCard from 'src/components/ProjectsCard.vue';
import ComingSoonLoader from 'src/components/custom/loader-coming-soon.vue';
import { useSettingStore } from '../stores/site-settings';
export default {
  name: 'PortfolioV2',
  components: { ProjectsCard, ComingSoonLoader },
  mixins: [img_url],
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      name: 'John Paul Pulido Perez',
      contacts: [
        {
          name: "Google",
          value: "johnpaulperez.prof@gmail.com",
          action: "emailto:johnpaulperez.prof@gmail.com",
          type: 'email'
        },
        {
          name: "Message",
          value: "+639284593303",
          action: "emailto:johnpaulperez.prof@gmail.com",
          type: 'sms'
        },
        {
          name: "Viber",
          value: "+639284593303",
          action: "emailto:johnpaulperez.prof@gmail.com",
          type: 'tel'
        },
        {
          name: "Messenger",
          value: "+639284593303",
          action: "emailto:johnpaulperez.prof@gmail.com",
          type: 'app'
        },
      ],
      latestCommitUrl: '',
      latestCommitHash: '',
      latestCommitMessage: '',
      lastContributor: '',
      languages: [
        {
          id: 7,
          name: 'Vue.js',
          logo: this.generateImgUrl('svg/vuejs.svg'),
          color: '#FFFFFF',
          link: 'https://vuejs.org/'
        },
        {
          id: 8,
          name: 'Laravel',
          logo: this.generateImgUrl('svg/laravel.svg'),
          color: '#FFFFFF',
          link: 'https://laravel.com/'
        },
        {
          id: 9,
          name: 'Node.js',
          logo: this.generateImgUrl('svg/nodejs.svg'),
          color: '#FFFFFF',
          link: 'https://nodejs.org/'
        },
        {
          id: 10,
          name: 'Quasar',
          logo: this.generateImgUrl('svg/quasar-svgrepo-com.svg'),
          color: '#FFFFFF',
          link: 'https://quasar.dev/'
        },
        {
          id: 11,
          name: 'MySQL',
          logo: this.generateImgUrl('svg/mysql-svgrepo-com.svg'),
          color: '#FFFFFF',
          link: 'https://www.mysql.com/'
        },
        {
          id: 12,
          name: 'PostgreSQL',
          logo: this.generateImgUrl('svg/postgresql-svgrepo-com.svg'),
          color: '#FFFFFF',
          link: 'https://www.postgresql.org/'
        },
        {
          id: 13,
          name: 'PWA',
          logo: this.generateImgUrl('svg/pwa.svg'),
          color: '#FFFFFF',
          link: 'https://developers.google.com/web/progressive-web-apps'
        },
        {
          id: 14,
          name: 'AWS Amplify',
          logo: this.generateImgUrl('svg/aws_amplify.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/amplify/'
        },
        {
          id: 15,
          name: 'AWS Lambda',
          logo: this.generateImgUrl('svg/aws_lambda.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/lambda/'
        },
        {
          id: 16,
          name: 'AWS API Gateway',
          logo: this.generateImgUrl('svg/aws_api_gateway.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/api-gateway/'
        },
        {
          id: 17,
          name: 'AWS IAM',
          logo: this.generateImgUrl('svg/aws_iam.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/iam/'
        },
        {
          id: 18,
          name: 'AWS Cognito',
          logo: this.generateImgUrl('svg/aws_cognito.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/cognito/'
        },
        {
          id: 19,
          name: 'AWS CodePipeline',
          logo: this.generateImgUrl('svg/aws_codepipeline.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/codepipeline/'
        },
        {
          id: 20,
          name: 'AWS CodeCommit',
          logo: this.generateImgUrl('svg/aws_codecommit.svg'),
          color: '#FFFFFF',
          link: 'https://aws.amazon.com/codecommit/'
        },
      ],
      languageContainerExpand: false,
    }
  },
  async mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
    this.getLatestCommit();
    await auth.login();
    await this.getSettings();

    this.setupPage()
  },
  computed: {
    languagesWithThemeColor() {
      return this.languages.map(language => {
        return {
          ...language,
          color: this.$q.dark.isActive ? '#333' : '#bcbcbc',
          logo_color: !this.$q.dark.isActive ? '#333' : '#FFF'
        }
      })
    },
    settings() {
      return useSettingStore().getSettingState
    },
    scrollShadowControl() {
      return this.$q.dark.isActive ? '#1D1D1D' : '#FFF'
    }
  },
  methods: {
    setupPage() {
      this.$q.dark.set(!this.settings.id_theme_light);
      const ws = new WebSocket('ws://localhost:8000/ws/rtu/');
      ws.onmessage = (event) => {
        console.log(`Received message: ${event.data}`);
      };
      ws.onopen = () => {
        console.log('Connected to WebSocket server');
      };
      ws.onclose = () => {
        console.log('Disconnected from WebSocket server');
      };
      ws.onerror = (error) => {
        console.log(`Error occurred: ${error}`);
      };
    },
    async getSettings() {
      const settingStore = useSettingStore();
      await settingStore.getSettings();
    },
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
<style scoped>
#container {
  width: 100%;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
}

#container .scroll {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: fit-content;
  white-space: nowrap;
  animation: loop 30s linear infinite;
}

.fade {
  width: 100%;
  position: absolute;
  background: linear-gradient(90deg,
      #000,
      transparent 30%,
      transparent 90%,
      #000);
  inset: 0;
  pointer-event: none;
}

@keyframes loop {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

.item {
  display: flex;
  align-items: center;
  color: #e2e8f0;

  margin: 0rem 0.1rem;
  border-radius: 0.4rem;
  white-space: nowrap;
  box-shadow:
    0 0.1rem 0.2rem #00000033,
    0 0.1rem 0.5rem #0000004d,
    0 0.2rem 01.5rem #00000066,
}

.sc-button {
  #fb:hover {
    color: #1976d2;
  }

  #li:hover {
    color: #0077b5;
  }

  #ig:hover {
    color: #e4439e;
  }

  #gh:hover {
    color: #1976d2;
  }

  #sp:hover {
    color: #1db954;
  }

  #di:hover {
    color: #7289da;
  }
}

.contact-button {
  text-decoration: none;
  color: #e2e8f0;
}
</style>
