<template>
    <div id="chart">
        <apexchart type="bar" height="500px" :options="testSeries.chartOptions" :series="testSeries.series"></apexchart>
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useExpensesStore } from '../../stores/expense';
import { useEntitiesStore } from "src/stores/entities";
export default {
    name: "StackedBar",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const expenseStore = useExpensesStore()
        const entitiesStore = useEntitiesStore()
        const testSeries = ref({
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 380
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
                    '#f48024', '#69d2e7'
                ],
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'India'
                    ],
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                title: {
                    text: 'Custom DataLabels',
                    align: 'center',
                    floating: true
                },
                subtitle: {
                    text: 'Category Names as DataLabels inside bars',
                    align: 'center',
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return ''
                            }
                        }
                    }
                }
            }
        })
        const options = computed(() => {
            let chartOptions = testSeries

            
        })
        onMounted(() => {
            entitiesStore.getAllExpense()
        })
        return {
            testSeries
        }
    }

}
</script>