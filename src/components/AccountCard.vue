<template>
    <q-card class="justify-center text-center" >
        <q-card-section>
            <q-avatar size="150px" font-size="52px" color="teal" text-color="white" icon="directions" />
        </q-card-section>
        <q-card-section>
            <q-input outlined v-model="name.display" dense />
            <q-input outlined v-model="name.display" dense />
            <q-input outlined v-model="name.display" dense />
        </q-card-section>
    </q-card>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'AccountsPage',
    setup() {
        const name = {
            first: null,
            last: null,
            middle: null,
            display: 'Leo Valdez'
        }
        const career = {
            jobTitle : 'Web Developer',
            level : 'Senior'
            
        } 

        return {
            name
        }
    },
})
</script>
