
    var option = {
        title:{
            text:'日产奶量统计',
            textStyle: {
						//文字颜色
						color: '#ccc'
					}
        },
        tooltip:{},
        legend:{
            data:['访客来源']
        },
        xAxis:{
            data:["周一","周二","周三","周四","周五","周六","周日"],
             axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                            width: 1, //这里是为了突出显示加上的  
                        }
                    }
            
        },
        yAxis:{
        	
        	 axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                            width: 1, //这里是为了突出显示加上的  
                        }
                    }
        },
        series:[{
            name:'产奶量',
            type:'line',
            areaStyle: {
                normal: {color: '#80ffc0'}
            },
            data:[600,310,200,800,500,400,800]
        }]
    };
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart1'));

    //使用制定的配置项和数据显示图表
    myChart.setOption(option);
