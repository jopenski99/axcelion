<template>
  <q-page padding>
    <div class="row gutter-md">
      <div class="col-xs-12 col-md-3 q-pa-md" style="height: 75vh">
        <profCard />
        <q-card class=" q-mt-lg q-pa-xs full-width">
          <q-card-section>
            <div class="text-h6">Skills and Tools</div>
          </q-card-section>
          <q-card-section>
            <div class="text-caption">Vue.js</div>
            <q-linear-progress value="0.9" color="secondary" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption">Node.js</div>
            <q-linear-progress value="0.85" color="green" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption">Mysql</div>
            <q-linear-progress value="0.8" color="orange" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption">PostgreSQL</div>
            <q-linear-progress value="0.8" color="teal" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption">Laravel</div>
            <q-linear-progress value="0.7" color="red" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption">AWS</div>
            <q-linear-progress value="0.85" color="orange" />
          </q-card-section>
          <q-card-section>
            <div class="text-caption">PWA</div>
            <q-linear-progress value="0.85" color="pink" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-md-3 q-pa-md">

        <q-card class="q-pa-md full-width">
          <q-card-section>
            <div class="text-h6">About Me</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">John Doe Perez</div>
            <div class="text-caption">Web Developer</div>
          </q-card-section>
          <q-card-section>
            <p>I'm a web developer who loves to build and maintain web applications. I'm passionate about using the
              latest technologies and following best practices to ensure my code is clean and maintainable. I'm always
              looking to learn new things and improve my skills.</p>
          </q-card-section>
        </q-card>
        <q-card class="q-pa-md full-width q-mt-md">
          <q-card-section>
            <div class="text-h6">Fetures that may be useful</div>
            <p>PWA is a web app that can be installed on your device and can be used offline. </p>
          </q-card-section>
          <div style=" height:36vh; overflow-y: scroll;">
            <q-card-section>
              <Camera />
            </q-card-section>
            <q-card-section>
              <Geolocation />
            </q-card-section>
            <q-card-section>
              <Notification />
            </q-card-section>
            <q-card-section>
              <WebAuthn />
            </q-card-section>
            <q-card-section>
              <Barcode />
            </q-card-section>
          </div>
          <!--  <q-card-section>
            <Camera />
          </q-card-section> -->
        </q-card>
      </div>
      <div class="col-xs-12 col-md-6 q-pa-md">
        <q-card class="q-pa-md full-width ">
          <q-timeline color="primary" style=" height:75vh; overflow-y: scroll; " class="q-pa-md">
            <q-timeline-entry title="Development Consultant (JAAIMS) March 2023 - Dec 2024" icon="laptop" side="left">
              <q-expansion-item class="shadow-1 overflow-hidden " style="border-radius: 30px" icon="explore"
                label="Key roles: Dev Management, Frontend, Backend (Part time)" header-class="bg-primary text-white"
                expand-icon-class="text-white">
                <div class="q-pa-md">
                  <div>
                    As a Development Consultant, I manage a team of developers to design and implement upcoming
                    features,
                    ensuring that the system is scalable for future updates. I also provide technical guidance to help
                    clients make informed decisions regarding the technology stack and architecture of the application.
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
                label="Key roles: Dev Management, Frontend, Backend (Full time)" header-class="bg-primary text-white"
                expand-icon-class="text-white">
                <div class="q-pa-md"><!--  -->
                  <div>
                    As a Fullstack Developer, I developed a web portal for games made by the company. The web portal
                    allows users to view and interact with the games, as well as manage their accounts and access other
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
                label="Key roles: Dev Management, Frontend, Backend (Full time)" header-class="bg-primary text-white"
                expand-icon-class="text-white">
                <div class="q-pa-md">
                  <div>
                    As the Lead Developer, I managed a team of developers to design and implement two applications, the
                    Main
                    App and the Admin Portal. The Main App is a web application that allows users to view and interact
                    with
                    their data, while the Admin Portal is a web application that allows administrators to manage the
                    data
                    and configure the system. My team and I were responsible for ensuring that the system was scalable
                    for
                    future updates and that the technology stack and architecture of the application were appropriate
                    for
                    the needs of the business. We worked closely with the stakeholders to ensure that the applications
                    met
                    their needs and were delivered on time and within budget. My responsibilities included:
                    - Managing the development team to ensure that the project was completed on time and to a high
                    standard
                    - Providing technical guidance to the team to ensure that the application was scalable and
                    maintainable
                    - Ensuring that the technology stack and architecture of the application were appropriate for the
                    needs
                    of the business
                    - Working closely with the stakeholders to ensure that the application met their needs and was
                    delivered
                    on time and within budget
                    - Ensuring that the application was tested thoroughly to ensure that it was of high quality and met
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
                label="Key roles: Dev Management, Frontend, Backend (Full time)" header-class="bg-primary text-white"
                expand-icon-class="text-white">
                <div class="q-pa-md">
                  <div>
                    As the Lead Developer, I was responsible for working on 1 out of 22 microservices as a monolithic
                    frontend using Vue JS and Laravel as our backend. The service I worked on was responsible for
                    catering
                    incoming client's inquiry on a specific apartment in the community, storing it as a lead, and
                    eventually
                    making an accurate calculation to recommend available apartments or rooms for clients. My team and I
                    were responsible for ensuring that the system was scalable for future updates and that the
                    technology
                    stack and architecture of the application were appropriate for the needs of the business. We worked
                    closely with the stakeholders to ensure that the application met their needs and was delivered on
                    time
                    and within budget. My responsibilities included:

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
                label="Key roles: Dev Management, Frontend, Backend (Full time)" header-class="bg-primary text-white"
                expand-icon-class="text-white">
                <div class="q-pa-md">
                  <div>
                    As a Full Stack Developer, I was responsible for working on 2 projects: an E-learning application
                    that
                    caters educational resources for students, and a Manpower Loaning and Renting Application for both
                    users
                    and administrators. The E-learning application was built using Vue JS and Laravel as our backend,
                    and
                    was responsible for storing and retrieving educational resources, as well as providing a
                    user-friendly
                    interface for users to access the resources. The Manpower Loaning and Renting Application was built
                    using Vue JS and Laravel as our backend, and was responsible for allowing users to apply for loans
                    and
                    rentals, and for administrators to manage the applications and provide approvals. My team and I were
                    responsible for ensuring that the system was scalable for future updates and that the technology
                    stack
                    and architecture of the applications were appropriate for the needs of the business. We worked
                    closely
                    with the stakeholders to ensure that the applications met their needs and were delivered on time and
                    within budget. My responsibilities included:
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
                label="Key roles: Dev Management, Frontend, Backend (Full time)" header-class="bg-primary text-white"
                expand-icon-class="text-white">
                <div class="q-pa-md">
                  <div>
                    As a Full Stack Developer, I was responsible for working on 2 projects: an Landing site for our
                    companies main product (POS), and Employee Management Application for both users and administrators.
                    My
                    responsibilities included:
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
  </q-page>
</template>

<script>
import profCard from 'src/components/custom/profCard.vue';
import Barcode from 'src/components/PWA/Barcode.vue';
import Camera from 'src/components/PWA/Camera.vue';
import Geolocation from 'src/components/PWA/Geolocation.vue';
import Notification from 'src/components/PWA/Notification.vue';
import WebAuthn from 'src/components/PWA/WebAuthn.vue';
export default {
  name: 'PWA Functions',
  components: { Camera, Geolocation, Notification, WebAuthn, Barcode, profCard }

}
</script>
