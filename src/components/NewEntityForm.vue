<template>
    <q-card class="justify-center text-center">
        <q-card-section>
            <div class="row full-width q-gutter-md">
                <div class="col-7">
                    <q-input label="Entity" outlined v-model="ent.name" debounce="1000" @update:model-value="searchEntity"
                        dense required />
                </div>
                <div class="col-4">
                    <q-input outlined dense v-model="ent.color" class="my-input">
                        <template v-slot:append>
                            <q-icon name="colorize" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                    <q-color v-model="ent.color" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </div>
        </q-card-section>
        <q-card-section>
            <div class="row full-width q-gutter-md q-pb-md  ">
                <div class="col-2">
                    <q-input label="name" outlined v-model="services.name" dense />
                </div>
                <div class="col">
                    <q-input label="outstanding" outlined v-model="services.outstanding" dense />
                </div>
                <div class="col">
                    <q-input label="monthly" outlined v-model="services.monthly" dense />
                </div>
                <div class="col-2">
                    <q-input label="due" dense outlined v-model="services.due" mask="date">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                    <q-date v-model="services.due" title="Monthly Due" subtitle="Select">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div class="col">
                    <q-checkbox v-model="services.recurring" label="Recurring" color="primary" />
                </div>
                <div class="col" v-if="services.recurring">
                    <q-input v-model.number="services.remaining_due" dense type="number" outlined />
                </div>
                <div class="col-1">
                    <q-btn icon="add" round color="primary" @click="addService">
                    </q-btn>
                </div>
            </div>
            <div class="row full-width q-gutter-md">
                <div class="col-9">
                    <q-input label="Purpose" v-model="services.purpose" required outlined />
                </div>
            </div>
        </q-card-section>
        <q-card-section>
            <div class="q-pa-md">
                <q-table :rows="ent.services" :columns="columns" row-key="name" flat bordered />
            </div>
        </q-card-section>
        <q-card-section>
            <q-btn color="primary" label="Submit" @click="submit" />
        </q-card-section>
    </q-card>
</template>
<script>

import { ref } from 'vue'
import { defineComponent, watch, reactive } from 'vue'
import { useEntitiesStore } from '../stores/entities'

export default defineComponent({
    name: 'NewEntityForm',
    setup() {
        const store = useEntitiesStore()
        const services = ref({})
        const ent = reactive({ name: null, services: [] })
        const columns = [
            { name: 'name', label: 'Name', field: 'name', sortable: true, style: 'width: 200px', },
            { name: 'outstanding', label: 'Outstanding', field: 'outstanding' },
            { name: 'monthly', label: 'Monthly', field: 'monthly', align: 'center' },
            { name: 'recurring', label: 'Installment', field: 'recurring', align: 'center' },
            { name: 'remaining_due', label: 'Months remaining', field: 'remaining_due', sortable: true, },
            { name: 'due', label: 'Due date', field: 'display_due', align: 'center' },
            { name: 'purpose', label: 'Purpose', field: 'purpose' }
        ]

        return {
            ent,
            store,
            services,
            columns
        }
    },

    methods: {
        async submit() {
            await this.store.insertEntity(this.ent)
        },
        addService() {
            this.services.display_due = this.getNthDay(this.services.due)
            console.log(this.services.display_due)
            this.ent.services.push(this.services)
            this.services = {}
        },
        getNthDay(d) {
            let no_of_days = new Date(d).getDate();
            let display = "Every "
            switch (no_of_days[no_of_days.length]) {
                case 1:
                    display += no_of_days + 'st day of the month'
                    break;
                case 2:
                    display += no_of_days + 'nd day of the month'
                    break;
                case 3:
                    display += no_of_days + 'rd day of the month'
                    break;
                case 11:
                    display += no_of_days + 'th day of the month'
                    break;
                case 12:
                    display += no_of_days + 'th day of the month'
                    break;
                case 13:
                    display += no_of_days + 'th day of the month'
                    break;
                default:
                    display += no_of_days + 'th of the month'
                    break;
            }
            return display
        },
        async searchEntity() {
            console.log('searching')
            let ent = await this.store.searchEntity({ term: this.ent.name, stringSearch: true })
            if (ent.entity) {
                this.ent.services.forEach(service => {
                    service.display_due = this.getNthDay(service.due)
                });
            }
        }
    }
})   
</script>