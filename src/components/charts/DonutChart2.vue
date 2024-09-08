<template>
    <div id="chart">
        <apexchart type="donut" :height="height" :options="chartData.options" :series="chartData.options.series"></apexchart>
      </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:"DonutChart2",
    components: {
		apexchart: VueApexCharts,
    },
    props:{
        height:{
            type: Number,
            default: 300
        },
        data:{
            type: Array,
            required :true
        }
    },
    data(){
        return{
        
            
            
        }
    },
    methods:{
        getPercentile(base, value){
            return ((100 * value) / base).toFixed(2)
        }
    },
    computed:{
        chartData(){
            // let legend = [] 
            // let values = []

            // this.data.forEach(item => {
            //     legend.push(item.name)
            //     values.push(item.value)
            // });
            
            return {
        
                options:{
                    series: [20, 80],
                    chart: {
                      type: 'donut',
                      
                    },
                    // colors:['#609846'],
                    // plotOptions: {
                    //   bar: {
                    //     borderRadius: 4,
                    //     horizontal: true,
                    //   }
                      
                    // },
                    // dataLabels: {
                    //   enabled: false
                    // },
                    // xaxis: {
                    //   categories: legend,
                    // }
                  
                },  
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