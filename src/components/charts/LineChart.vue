<template>
    <div id="chart">
        <apexchart type="line" :height="height" :options="chartData.options" :series="chartData.data"></apexchart>
    </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name: "LineChart",
    components: {
		apexchart: VueApexCharts,
    },
    props: {
        height: {
            default: 300
        },
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {



        }
    },
    computed: {
        chartData() {
            // let legend = [] 
            // let values = []

            // this.data.forEach(item => {
            //     legend.push(item.name)
            //     values.push(item.value)
            // });

            return {

               
 options: {
                    series: [{
                        name: "Gender",
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                    }],
                    chart: {
                        type: 'line',
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: '',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    }
                }
                // responsive: [{
                // breakpoint: 480,
                // options: {
                //     chart: {
                //         width: 200
                //     },
                //     legend: {
                //         position: 'bottom'
                //     }
                // }
                // }],
                // data:[{data:values}]
            }
        }
    }
}

</script>