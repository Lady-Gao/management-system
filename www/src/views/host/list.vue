<style scoped lang="stylus">
.host{
    width:100%;
    margin-top:10%;
    margin-left:8%;
}

</style>

<template>
  <div class="host ovh">
    <div class="conten" >
        <div id="myChart" :style="{width: '600px', height: '500px'}">
        </div>
    </div>
  </div>
</template>
<script>
    export default{
       data () {
    return {
      
    }
  },
  mounted(){
    this.weeklist();
  },
  methods: {
    weeklist(){
    let myChart = this.$echarts.init(document.getElementById('myChart'))
        var  option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'利润',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            name:'收入',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'支出',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    }
myChart.setOption(option)
    }
  }
    }
</script>
