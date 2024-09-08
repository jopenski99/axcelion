<template>
    <div id="chart">
        <apexchart type="bar" :height="height" :options="chartData.options" :series="chartData.data"></apexchart>
      </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:"HorizontalBarChart",
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
            let legend = [] 
            let values = []

            this.data.forEach(item => {
                legend.push(item.name)
                values.push(item.value)
            });
            
            return {
                options:{
                    chart: {
                      type: 'bar',
                      height: 350
                    },
                    colors:['#609846'],
                    plotOptions: {
                      bar: {
                        borderRadius: 4,
                        horizontal: true,
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    xaxis: {
                      categories: legend,
                    }
                  
                },  
                data:[{data:values}]
            }
        }
    }
}
</script>