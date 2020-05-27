var myChart = echarts.init(document.querySelector(".zzt"));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '到访客户统计',
        subtext:'(2020/5/1~2020/5/30)',
        left:'center',
        

    },
    tooltip: {},
    legend: {
        data:['销量'],
        x:'600px'
    },
    xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"]
    },
    yAxis: {},

    grid:{
        x:40,  //距离左边多远
        y:50,  //距离上边多远
        x2:10,  //距离右边多远
        y2:20  //距离下边多远
    },

    series: [{
        name: '销量',
        type: 'bar',
        data: [8, 20, 26, 10, 13, 20,15]
    }]
};
 
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//回款指标
// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.querySelector(".bzt2"));
 
myChart2.setOption({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: ({d}%)'
    },

    legend: {
        orient: 'vertical',
        left: 10,
        data: ['达成', '未达成']
    },



    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '80%'],
            center: ["50%","60%"],
            avoidLabelOverlap: false,

            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 70, name: '达成', itemStyle:{color:'rgb(91, 163, 245)'}},
                {value: 30, name: '未达成', itemStyle:{color:'rgb(57, 197, 174)'}},

            ]
        }
    ]
});



//销售指标
// 基于准备好的dom，初始化echarts实例
var myChart222 = echarts.init(document.querySelector(".bzt2222"));
 
myChart222.setOption({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: ({d}%)'
    },

    legend: {
        orient: 'vertical',
        left: 10,
        data: ['达成', '未达成']
    },



    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '80%'],
            center: ["50%","60%"],
            avoidLabelOverlap: false,

            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 70, name: '达成', itemStyle:{color:'rgb(91, 163, 245)'}},
                {value: 30, name: '未达成', itemStyle:{color:'rgb(57, 197, 174)'}},

            ]
        }
    ]
});









//报备客户转访率
var myChart4 = echarts.init(document.querySelector(".bbkh"));
 
myChart4.setOption({

    title: {
        text: '报备客户专访率',
        // subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['来电专访', '拓客专访', '渠道专访']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['50%', '60%'],
            data: [
                {value: 40, name: '来电专访'},
                {value: 30, name: '拓客专访',itemStyle:{color:'rgb(91, 163, 245)'}},
                {value: 30, name: '渠道专访',itemStyle:{color:'rgb(57, 197, 174)'}}

            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});

//到访客户成交率

var myChart5 = echarts.init(document.querySelector(".dfkh2"));
 
myChart5.setOption({
    title: {
        text: '到访客户成交率',
        // subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['认筹', '认购', '签约']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['50%', '60%'],
            data: [
                {value: 30, name: '认筹'},
                {value: 30, name: '认购',itemStyle:{color:'rgb(91, 163, 245)'}},
                {value: 40, name: '签约',itemStyle:{color:'rgb(57, 197, 174)'}}

            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});




//回款金额折线图
var myChar3 = echarts.init(document.querySelector(".zxt-xsze"));

// 指定图表的配置项和数据
var option3 = {

    xAxis: {
        type: 'category',
        data: ['5/1', '5/2', '5/3', '5/4', '5/5', '5/6', '5/7']
    },
    yAxis: {
        type:'value',
        min: 0,
        max: 80,
    },

    legend:{
        data:['销量'],
        x:'400px',
        y:'10px',
        
    },
    series: [{
        name:'销量',
        data: [32, 21, 33, 24, 29, 31, 45],
        type: 'line',
        color:'rgb(66,156,240)',
        itemStyle : { normal: {label : {show: true}}}
    }]
};
 
// 使用刚指定的配置项和数据显示图表。
myChar3.setOption(option3);



//销售指标双折线图
var myChar333 = echarts.init(document.querySelector(".zxt-xsze222"));

// 指定图表的配置项和数据
var option333 = {

    title: {
        text: '销售金额（万元）'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['认购金额', '签约金额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {  //保存为图片
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type:'value',
        min: 0,
        max: 80,
    },
    series: [
        {
            name: '认购金额',
            type: 'line',
            stack: '总量',
            
            data: [20, 25, 27, 32, 22, 45, 31]
        },
        {
            name: '签约金额',
            type: 'line',
            stack: '总量',
            data: [24, 45, 31, 19, 50, 24, 21]
        }

    ]
};
 
// 使用刚指定的配置项和数据显示图表。
myChar333.setOption(option333);








var myChar6 = echarts.init(document.querySelector(".qdtd"));

// 指定图表的配置项和数据
var option6 = {
    title: {
        text: '渠道团队类别分析',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        formatter:'{b}:{c}%',
        axisPointer: {
            type: 'shadow'
        }
    },
    // legend: {
    //     data: ['2011年']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['全部渠道', '分销公司', '中介公司', '自由经纪人']
    },
    series: [
        {
            name: '2020年',
            type: 'bar',
            data: [30, 40, 40, 20],
            itemStyle:{
                normal:{   //改变每个柱子的颜色
                    color:function(params){
                        let colorList = [
                            "#EE5C42",
                            "#7A67EE",
                            "#61a0a8",
                            "#d48265"
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:{
                        show:true,
                        position:'right',
                        formatter:'{c}%'
                    }
                }
            }
        },

    ]
};
 
// 使用刚指定的配置项和数据显示图表。
myChar6.setOption(option6);



var myChar7 = echarts.init(document.querySelector(".qdkh"));

// 指定图表的配置项和数据
var option7 = {
    title: {
        text: '渠道客户转化分析',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        formatter:'{b}:{c}%',
        axisPointer: {
            type: 'shadow'
        }
    },
    // legend: {
    //     data: ['2011年']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['到访/报备', '认筹/到访', '认购/认筹', '签约/认购']
    },
    series: [
        {
            name: '2020年',
            type: 'bar',
            data: [20, 30, 40, 50],
            itemStyle:{
                normal:{   //改变每个柱子的颜色
                    color:function(params){
                        let colorList = [
                            "#EE5C42",
                            "#7A67EE",
                            "#61a0a8",
                            "#d48265"
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:{
                        show:true,
                        position:'right',
                        formatter:'{c}%'
                    }
                }
            }
        },

    ]
};
 
// 使用刚指定的配置项和数据显示图表。
myChar7.setOption(option7);






var myChar8 = echarts.init(document.querySelector(".xsjhfx"));

// 指定图表的配置项和数据
var option8 = {
    title: {
        text: '销售机会分析',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        formatter:'{b}:{c}%',
        axisPointer: {
            type: 'shadow'
        }
    },
    // legend: {
    //     data: ['2011年']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['D类客户', 'C类客户', 'B类客户', 'A类客户','机会客户']
    },
    series: [
        {
            name: '2020年',
            type: 'bar',
            data: [20, 20, 40, 20,100],
            itemStyle:{
                normal:{   //改变每个柱子的颜色
                    color:function(params){
                        let colorList = [
                            "#EE5C42",
                            "#7A67EE",
                            "#61a0a8",
                            "#d48265",
                            "#1C86EE"

                        ];
                        return colorList[params.dataIndex]
                    },
                    label:{
                        show:true,
                        position:'right',
                        formatter:'{c}%'
                    }
                }
            }
        },

    ]
};
 
// 使用刚指定的配置项和数据显示图表。
myChar8.setOption(option8);



var myChar9 = echarts.init(document.querySelector(".cjkhfx"));

// 指定图表的配置项和数据
var option9 = {
    title: {
        text: '成交客户分析',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        formatter:'{b}:{c}%',
        axisPointer: {
            type: 'shadow'
        }
    },
    // legend: {
    //     data: ['2011年']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['签约客户', '认购客户', '次访客户', '到访客户','留电客户']
    },
    series: [
        {
            name: '2020年',
            type: 'bar',
            data: [20, 30, 40, 60, 100],
            itemStyle:{
                normal:{   //改变每个柱子的颜色
                    color:function(params){
                        let colorList = [
                            "#EE5C42",
                            "#7A67EE",
                            "#61a0a8",
                            "#d48265",
                            "#1C86EE"
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:{
                        show:true,
                        position:'right',
                        formatter:'{c}%'
                    }
                }
            }
        },

    ]
};
 
// 使用刚指定的配置项和数据显示图表。
myChar9.setOption(option9);














//第二部分，案场客户、外场客户、销售机会、销售台账切换


$(document).ready(function(){  //初次打开页面，默认打开销售简报

    $(".xsjb").show();  //默认首页打开案场客户
    $(".wckh").hide();  //其他隐藏
    $(".xsjh").hide();
    $(".xstz").hide();

    $(".ksrq").hide();  //选择日期-开始日期
    $(".jsrq").hide();  //选择日期-结束日期

    $(".zzt").hide();
    $(".zhl").hide();
    $(".qdfx").hide();
    $(".xsld").show();

    
    $(".jxpm2").hide();
    $(".jxpm3").hide();


    
    $(".bzt-xszb222").hide();
    $(".zxt1222").hide();




});  


$(document).ready(function(){   //打开外场客户
    $(".bt2").click(function(){
        $(".bt1").css("background","white");
        $(".bt2").css("background","rgb(220, 220, 220)");
        $(".bt3").css("background","white");
        $(".bt4").css("background","white");

        $(".xsjb").hide();
        $(".wckh").fadeIn("slow");
        $(".xsjh").hide();
        $(".xstz").hide();
    });
});

$(document).ready(function(){   //打开销售简报
    $(".bt1").click(function(){
        $(".bt1").css("background","rgb(220, 220, 220)");
        $(".bt2").css("background","white");
        $(".bt3").css("background","white");
        $(".bt4").css("background","white");

        $(".xsjb").fadeIn("slow");
        $(".wckh").hide();
        $(".xsjh").hide();
        $(".xstz").hide();
    });
});

$(document).ready(function(){    //打开销售机会
    $(".bt3").click(function(){
        $(".bt1").css("background","white");
        $(".bt2").css("background","white");
        $(".bt3").css("background","rgb(220, 220, 220)");
        $(".bt4").css("background","white");

        $(".xsjb").hide();
        $(".wckh").hide();
        $(".xsjh").fadeIn("slow");
        $(".xstz").hide();
    });
});

$(document).ready(function(){   //打开销售台账
    $(".bt4").click(function(){
        $(".bt1").css("background","white");
        $(".bt2").css("background","white");
        $(".bt3").css("background","white");
        $(".bt4").css("background","rgb(220, 220, 220)");

        $(".xsjb").hide();
        $(".wckh").hide();
        $(".xsjh").hide();
        $(".xstz").fadeIn("slow");
    });
});



$("ul.dropdown-menu").on("click", "[data-stopPropagation]",function(e) {  
    e.stopPropagation();
    $(".ksrq").show();
    $(".jsrq").show();
});

$(document).ready(function(){
    $(".xzkh1").click(function(){
      $('#myModal').modal();
    });
});


$('.datepicker').datepicker();

$(document).ready(function(){  //图表切换转化率
    $(".m2").click(function(){
      $(".zzt").hide();
      $(".zhl").fadeIn("slow"); //淡进效果
      $(".qdfx").hide();
      $(".xsld").hide();

      $(".biaoti").text("转化率");

    });
});

$(document).ready(function(){  //图表切换到访客户统计
    $(".m1").click(function(){
      $(".zzt").fadeIn("slow");
      $(".zhl").hide();
      $(".qdfx").hide();
      $(".xsld").hide();

      $(".biaoti").text("到访客户统计");
    });
});

$(document).ready(function(){  //图表渠道分析
    $(".m3").click(function(){
      $(".zzt").hide();
      $(".zhl").hide();
      $(".qdfx").fadeIn("slow");
      $(".xsld").hide();

      $(".biaoti").text("渠道分析");
    });
});

$(document).ready(function(){  //图表切换销售漏斗
    $(".m4").click(function(){
      $(".zzt").hide();
      $(".zhl").hide();
      $(".qdfx").hide();
      $(".xsld").fadeIn("slow");

      $(".biaoti").text("销售漏斗");
    });
});


$(function(){	
	$('.qiehuan000').hover(function(e) {
        $('.bbb000').stop().slideToggle()
    });
})


$(function(){	
	$('.qiehuan').hover(function(e) {
        $('.bbb').stop().slideToggle()
    });
})

$(function(){	
	$('.qiehuan2').hover(function(e) {
        $('.bbb2').stop().slideToggle()
    });
})


$(document).ready(function(){  //绩效排名切换
    $(".xz").click(function(){
      $(".jxpm").hide();
      $(".jxpm2").fadeIn("slow");
      $(".jxpm3").hide();

      $(".tud").css("background","rgb(255, 255, 255)");
      $(".xz").css("background","rgb(230, 230, 230)");
      $(".gr").css("background","rgb(255, 255, 255)");
    });
});

$(document).ready(function(){  //绩效排名切换
    $(".tud").click(function(){
      $(".jxpm").fadeIn("slow");
      $(".jxpm2").hide();
      $(".jxpm3").hide();

      $(".tud").css("background","rgb(230, 230, 230)");
      $(".xz").css("background","rgb(255, 255, 255)");
      $(".gr").css("background","rgb(255, 255, 255)");
    });
});

$(document).ready(function(){  //绩效排名切换
    $(".gr").click(function(){
      $(".jxpm").hide();
      $(".jxpm2").hide();
      $(".jxpm3").fadeIn("slow");

      $(".tud").css("background","rgb(255, 255, 255)");
      $(".xz").css("background","rgb(255, 255, 255)");
      $(".gr").css("background","rgb(230, 230, 230)");
    });
});



$(document).ready(function(){  //绩效排名切换
    $(".zjwz").mouseover(function(){
        $(".zjwz").hide();
    });
    $(".bzt2").mouseout(function(){
        $(".zjwz").show();
    });
});


$(document).ready(function(){  //绩效排名切换
    $(".zjwz222").mouseover(function(){
        $(".zjwz222").hide();
    });
    $(".bzt2222").mouseout(function(){
        $(".zjwz222").show();
    });

});


$(document).ready(function(){  //回款额和销售额之间的切换
    $(".m22").click(function(){
       $(".bzt-xszb").hide();
       $(".bzt-xszb222").fadeIn("slow");

       $(".zxt1").hide();
       $(".zxt1222").fadeIn("slow");

       $(".biaoti2").text("销售指标");
    });
});

$(document).ready(function(){  //回款额和销售额之间的切换
    $(".m111").click(function(){
       $(".bzt-xszb").fadeIn("slow");
       $(".bzt-xszb222").hide();

       $(".zxt1").fadeIn("slow");
       $(".zxt1222").hide();

       $(".biaoti2").text("回款金额");
    });
});



