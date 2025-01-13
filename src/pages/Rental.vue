<template>
    <div class="row q-col-gutter-x-md q-col-gutter-y-xs q-mt-lg">
        <q-dialog v-model="showDialog" >
            <VehicleDialog @close="showDialog=false" />
        </q-dialog>
        <q-dialog v-model="showAppointmentDialog" >
            <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section>
                    <AppointmentsForm @close="showAppointmentDialog=false" />
                </q-card-section>
            </q-card>
        </q-dialog>
        <div class="col-12 col-md-6 ">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Interacted Clients</div>
                </q-card-section>
                <q-card-section>
                    <q-list>
                        <q-item v-for="client in interactedClients" :key="client.id" class="q-my-sm">
                            <q-item-section avatar>
                                <q-avatar color="blue" text-color="white">
                                    {{ client.initials }}
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{ client.name }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-12 col-md-6">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Calendar</div>
                </q-card-section>
                <q-card-section>
                    <q-select outlined v-model="selectedVehicle" :options="vehicles.map(vehicle => ({ label: vehicle.model + ' ( '+vehicle.name+' )', value: vehicle.id }))" label="Select Vehicle">
                        <template v-slot:append>
                            <q-btn dense flat icon="add" @click="addNewVehicle" />
                        </template>
                    </q-select>
                </q-card-section>
                <q-card-section>
                    <q-date class="full-width" v-model="formattedDates" title="Schedule for Rental" subtitle="L300"
                        range multiple bordered :events="eventsFn" :event-color="color" />
                </q-card-section>
            </q-card>
        </div>
        <div class="col-12 col-md-6">
            <q-card>
                <q-card-section class="row items-center">
                    <div class="text-h6">Appointment Tracker</div>
                    <q-space />
                    <q-btn color="primary" label="New Rent" @click="showAppointmentDialog=true" />
                </q-card-section>
                <q-card-section>
                    <q-list>
                        <q-item v-for="appointment in appointments" :key="appointment.id" class="q-my-sm">
                            <q-item-section avatar>
                                <q-avatar color="blue" text-color="white">
                                    {{ appointment.initials }}
                                </q-avatar>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import AppointmentsForm from 'src/components/Rental/AppointmentsForm.vue';
import { vehicleMixin } from 'src/mixins/vehicles';
export default {
    name: 'RentalPage',
    mixins: [vehicleMixin],
    components: {
        VehicleDialog: () => import('components/Rental/VehicleDialog.vue'),
        AppointmentsForm
    },
    data() {
        return {
            showAppointmentDialog: false,
            showDialog: false,
            selectedDate: '2021-01-01',
            selectedVehicle: null,
            vehicles: ['L300', 'L400', 'L500'],
            interactedClients: [
                { id: 1, name: 'John Doe', initials: 'JD' },                
                { id: 2, name: 'Jane Doe', initials: 'JD' },
                { id: 3, name: 'John Smith', initials: 'JS' },
                { id: 4, name: 'Jane Smith', initials: 'JS' }
            ],
            appointments: [
                { from: "2025/01/01", to: "2025/01/09", color: 'orange' },
                { from: "2025/01/11", to: "2025/01/14", color: 'green' },
                { from: "2025/01/16", to: "2025/01/20", color: 'red' }
            ],
            colorOptions: {},
            eventsFn: (date) => {
                let formDate = date.replace(/\//g, '-')
                let res = this.formattedDates.all_events.find((item) => item.includes(formDate))
                return res ? true : false;
            }
        }
    },
    async mounted() { 
       await this.getVehicles()
    },
    computed: {

        formattedDates() {
            let all_events = []
            let formatted_dates = []
            this.appointments.map(appointment => {
                const events = [];
                for (let date = new Date(appointment.from);
                    date <= new Date(appointment.to);
                    date.setDate(date.getDate() + 1)) {
                    events.push(date.toISOString().split('T')[0]);
                    all_events.push(date.toISOString().split('T')[0]);
                }
                formatted_dates.push({ ...appointment, events });
            });

            return {
                formatted_dates,
                all_events
            }
        }
    },
    methods: {
        addNewVehicle() {
            this.showDialog = true
        },
        color(data) {

            let formDate = data.replace(/\//g, '-')
            let res = this.formattedDates.formatted_dates.find((item) => {
                return item.events.includes(formDate)
            })

            return res ? res.color : null
        },
        onDayClick(day) {
            console.log('day clicked: ', day.date)
        },
        colorizeDates() {
            this.colorOptions = {};
            this.appointments.forEach(range => {
                for (let date = new Date(range.from);
                    date <= new Date(range.to);
                    date.setDate(date.getDate() + 1)) {
                    const key = date.toISOString().split('T')[0];
                    this.colorOptions[key] = { class: `bg-${range.color}` };
                }
            });
        },
    },
}
</script>
<style scoped>
.bg-red {
    background: red;
}

.bg-blue {
    background: blue;
}

.bg-green {
    background: green;
}

.bg-orange {
    background: orange;
}
</style>
