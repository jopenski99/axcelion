<template>
    <div id="chart">
        <apexchart type="donut" height="auto" :options="data.chartOptions" :series="data.series"></apexchart>
      </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:"DonutChart",
    components: {
		apexchart: VueApexCharts,
    },
    props:{
        height:{
            type: Number,
            default: 300
        },
        data:{
            type: Object,
            required :true
        },
        /* options:{
            type:Object,
            required:true
        } */
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
  
    }
}
</script>