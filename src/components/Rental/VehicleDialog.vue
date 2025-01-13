<template>
    <q-card style="width: 300px">
        <q-card-section>
            <div class="q-gutter-md">
                <q-input label="Vehicle Model" outlined v-model="vehicle.model" required />
                <q-input label="Vehicle Name" outlined v-model="vehicle.name" required />
                <q-input label="Plate Number" outlined v-model="vehicle.platenumber" required />
                <q-input label="Color" outlined v-model="vehicle.color" required />
            </div>
        </q-card-section>
        <q-card-section>
            <q-btn color="primary" label="Submit" @click="submitForm" />
        </q-card-section>
    </q-card>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { vehicleMixin } from 'src/mixins/vehicles';
import { mapActions } from 'pinia';
export default {
    mixins: [vehicleMixin],
    data() {
        return {
            vehicle: {
                id: '',
                model: '',
                name: '',
                platenumber: '',
                color: ''
            }
        };
    },
    methods: {
        async submitForm() {
            this.vehicle.id = uuidv4();
            let res = await this.addVehicle(this.vehicle);
            if (res === true) {
                this.$q.notify({
                    type: 'positive',
                    message: 'Vehicle saved successfully!'
                });
            }
            this.$emit('close');
        }
    }
};
</script>
