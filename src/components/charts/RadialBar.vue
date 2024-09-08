<template>
    <div id="chart">
        <apexchart type="radialBar" :height="height" :options="chartData.options" :series="chartData.data"></apexchart>
      </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name:"RadialBarChart",
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
            legend.push("Total")
            values.push(this.data.population)
            this.data.categories.forEach(item => {
                legend.push(item.name+ "(%)")
                values.push(this.getPercentile(this.data.population,item.value))
            });
            
            return {
                options:{
                    chart: {
                      height: 390,
                      type: 'radialBar',
                    },
                    plotOptions: {
                      radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                          margin: 5,
                          size: '30%',
                          background: 'transparent',
                          image: undefined,
                        },
                        dataLabels: {
                          name: {
                            show: true,
                          },
                          value: {
                            show: false,
                          }
                        }
                      }
                    },
                    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                    labels: legend,
                    legend: {
                      show: true,
                      floating: true,
                      fontSize: '16px',
                      position: 'left',
                      offsetX: 0,
                      offsetY: 15,
                      labels: {
                        useSeriesColors: true,
                      },
                      markers: {
                        size: 0
                      },
                      formatter: function(seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                      },
                      itemMargin: {
                        vertical: 3
                      }
                    },
                    responsive: [{
                      breakpoint: 480,
                      options: {
                        legend: {
                            show: false
                        }
                      }
                    }]
                },  
                data:values
            }
        }
    }
}
</script>