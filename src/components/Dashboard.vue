<template>
    <div>
        <div class="row full-width">
            <div class="col-6">
                <NewEntityForm />
            </div>
            <div class="col-4">
                <StackedColumn />
            </div>
        </div>
        <div class="row full-width absolute" style="width:99vw !important; bottom:5px;">
            <div class="col">
                <q-card class="justify-center text-center ">
                    <q-card-section>
                        <div class="row full-width q-gutter-md">
                            <q-carousel class="full-width" v-if="$q.platform.is.mobile" v-model="slide"
                                transition-prev="slide-right" transition-next="slide-left" swipeable animated padding
                                height="80px">
                                <q-carousel-slide v-for="(quarter, index) in threeWayMonths" :name="index"
                                    :key="'q-' + (index + 1)" class="column no-wrap full-width">
                                    <div class="row full-width q-gutter-sm">
                                        <div class="col" v-for="month in quarter" :key="month.name">
                                            <q-btn :color="month.selected ? 'primary' : 'white'"
                                                :text-color="month.selected ? 'white' : 'primary'" class="full-width">{{
                                month.name
                            }}</q-btn>
                                        </div>
                                    </div>
                                </q-carousel-slide>
                            </q-carousel>
                            <div v-else-if="$q.platform.is.desktop" class="col" v-for="month in months" :key="month.id">
                                <q-btn :color="month.selected ? 'primary' : 'white'"
                                    :text-color="month.selected ? 'white' : 'primary'" class="full-width">{{ month.name
                                    }}</q-btn>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
import NewEntityForm from './NewEntityForm.vue'
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import StackedColumn from './charts/StackedColumn.vue'
import { useEntitiesStore } from '../stores/entities'
export default defineComponent({
    name: 'Dashboard',
    components: { NewEntityForm, StackedColumn },
    setup() {
        const entities = useEntitiesStore()
        const $q = useQuasar()
        const slide = ref(1);
        const months = ref([
            {
                id: 1,
                name: 'January',
                selected: false,
            },
            {
                id: 2,
                name: 'February',
                selected: true,
            },
            {
                id: 3,
                name: 'March',
                selected: false,
            },
            {
                id: 4,
                name: 'April',
                selected: false,
            },
            {
                id: 5,
                name: 'May',
                selected: false,
            },
            {
                id: 6,
                name: 'June',
                selected: false,
            },
            {
                id: 7,
                name: 'July',
                selected: false,
            },
            {
                id: 8,
                name: 'August',
                selected: false,
            },
            {
                id: 9,
                name: 'September',
                selected: false,
            },
            {
                id: 10,
                name: 'October',
                selected: false,
            },
            {
                id: 11,
                name: 'November',
                selected: false,
            },
            {
                id: 12,
                name: 'December',
                selected: false,
            },
        ])
        const threeWayMonths = computed(() => {
            let arr = []
            let slide = []
            months.value.forEach((month, index) => {
                slide.push(month)
                if (!((index + 1) % 3)) {
                    arr.push(slide)
                    slide = []
                }
            });
            return arr;
        })
        onMounted(() => {
            console.log(months.value[0])
            entities.getAllExpense()
            console.log($q)
        })
        return {
            months,
            threeWayMonths,
            slide,
        }
    }
})

</script>