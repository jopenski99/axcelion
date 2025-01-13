<template>
  <q-card class="q-pa-md">
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-pt-sm">
          <div class="col-12 q-pa-sm">
            <q-select outlined v-model="appointment.vehicle"
              :options="vehicles.map(vehicle => ({ label: vehicle.model + ' ( ' + vehicle.name + ' )', value: vehicle.id }))"
              label="Select Vehicle" required />
          </div>
        </div>
        <div class="row ">
          <div class="col-12 q-pa-sm">
            <q-input label="Name of Renter" outlined v-model="appointment.renterName" required />
          </div>
        </div>
        <div class="row ">
          <div class="col-6 q-pa-sm">
            <q-input label="Contact Person" outlined v-model="appointment.contactPerson" required />
          </div>
          <div class="col-6 q-pa-sm ">
            <q-input type="tel" label="Contact Number" outlined v-model="appointment.contactNumber" required />
          </div>
        </div>
        <div class="row ">
          <div class="col-6 q-pa-sm">
            <q-input type="number" label="Milage Allowance" outlined v-model="appointment.milageAllowance" />
          </div>
          <div class="col-6 q-pa-sm ">
            <q-select outlined color="primary" v-model="appointment.initialLocation"  use-input
              :options="locations" map-options label="Initial location" @input="searchLocation" :loading="searchLoading"
              @filter="searchLocation">
              <template v-slot:prepend>
                <q-icon name="place" color="primary" />
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    <div v-if="!searchLoading">
                      No results
                    </div>
                    <div v-else>
                      <q-inner-loading size="sm" :showing="searchLoading" label="Please wait..." />
                    </div>
                  </q-item-section>
                </q-item>
              </template>
              <template v-slot:option="scope">
                <div v-if="!searchLoading">
                  <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                    <q-item-section>
                      <q-item-label>{{ scope.opt.name }} <!-- <q-badge outline
                                  :color="scope.opt.active ? 'green' : 'grey-7'"
                                  :label="scope.opt.active ? 'Active' : 'Inactive'" /> -->
                      </q-item-label>
                      <q-item-label caption>{{ scope.opt.completeName }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div v-else>
                  <q-inner-loading size="sm" :showing="searchLoading">
                    <q-spinner-orbit color="primary" size="15px" />
                  </q-inner-loading>
                </div>
              </template>
            </q-select>
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-6 q-pa-sm q-py-md">
            <q-toggle v-model="appointment.withDownpayment" label="With Downpayment" />
          </div>
          <div class="col-6 q-pa-sm">
            <q-input v-if="appointment.withDownpayment" type="number" label="Downpayment Amount" outlined
              v-model="appointment.downpaymentAmount" />
          </div>
        </div>
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-input filled v-model="appointment.dateRange" label="Starting date and time">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-6 q-pa-sm">
            <q-input filled v-model="appointment.dateRange" label="Ending date and time">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="row ">
          <div class="col-6 q-pa-sm">
            <q-input type="number" label="Agreed Rate" outlined v-model="appointment.agreedRate" required />
          </div>
          <div class="col-6 q-pa-sm ">
            <q-input type="number" label="Reminder (hours before 'Date From')" outlined
              v-model="appointment.reminderHours" required />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn type="submit" label="Submit" color="primary" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { vehicleMixin } from 'src/mixins/vehicles';

export default {
  name: 'AppointmentsForm',
  mixins: [vehicleMixin],
  data() {
    return {
      searchLoading:false,
      appointment: {
        vehicle: null,
        renterName: '',
        contactPerson: '',
        contactNumber: '',
        milageAllowance: null,
        initialLocation: '',
        agreedRate: null,
        withDownpayment: false,
        downpaymentAmount: null,
        dateFrom: '',
        dateTo: '',
        reminderHours: null
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
    }
  },
  mounted() {
    this.getVehicles();
  }
};
</script>
