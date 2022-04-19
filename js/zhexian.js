
    var option = {
        title:{
            text:'日活动数据',
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
            data:["0","2","4","6","8","10","12","14","16","18","20","22"],
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
            data:[28,26,46,48,32,41,37,56,40,58,69,54]
        }]
    };
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart1'));

    //使用制定的配置项和数据显示图表
    myChart.setOption(option);
