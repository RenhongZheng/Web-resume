//菜单键
$(document).ready(function(){
		$(".hamburger").click(function(){
			$(this).toggleClass("is-active");
			$("#center_left").toggle(400);
		});
});
//实现更具滑轮滚动变化效果
$(window).scroll(function() {
	// 读取到body到div头部的距离
    var cont1 = $("#tu01").offset().top;//获取模块距页面顶部的距离

	var cont2 = $("#tu02").offset().top -10;		//第二个div
	
	var cont3 = $("#tu03").offset().top -10;		//第三个div
	
	var cont4 = $("#tu04").offset().top -10;		//第四个div
	
	var cont5 = $("#tu05").offset().top -50;		//第五个div
	var  t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
	if(t >=  cont1  && t <= cont2)    { //到顶部的距离介于两者之间时
    	$("[href='#tu01']").addClass("a");//添加class,改变对应导航栏颜色
 	} else {
   		$("[href='#tu01']").removeClass("a");
	}
//第二个页面
 	if(t>=cont2 && t<= cont3){
 		$("[href='#tu02']").addClass("a");
 	}
 	else{
 		$("[href='#tu02']").removeClass("a");
 	}
//第三个页面
 	if(t>=cont3 && t<= cont4){
 		$("[href='#tu03']").addClass("a");
 	}
 	else{
 		$("[href='#tu03']").removeClass("a");
 	}
//第四个页面
 	if(t>=cont4 && t<= cont5){
 		$("[href='#tu04']").addClass("a");
 	}
 	else{
 		$("[href='#tu04']").removeClass("a");
 	}
//第五个页面
	if(t>=cont5){
 		$("[href='#tu05']").addClass("a");
 	}
 	else{
 		$("[href='#tu05']").removeClass("a");
 	}
// 	设置滑动条到300进行图片旋转动画效果
	if(t>cont1+300)
	{
		$("#tu02_center img").css("transform","rotateX(720deg)");
		$("#tu02_center img").css("transition","transform 1s");
	}
});

//饼图效果，网页交互式图表
$(document).ready(function() {  
   var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false
   };
   var title = {
      text: '以下是我的技能图'   
   };      
   var tooltip = {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   };
   var plotOptions = {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: false           
         },
         showInLegend: true
      }
   };
   var series= [{
      type: 'pie',
      name: '掌握程度',
      data: [
         ['HTML',   45.0],
         ['CSS',       26.8],
         {
            name: 'javaScript',
            y: 12.8,
            sliced: true,
            selected: true
         },
         ['jQuery',    8.5],
         ['HTML5',     6.2],
         ['Vue.js',   0.7]
      ]
   }];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;     
   json.tooltip = tooltip;  
   json.series = series;
   json.plotOptions = plotOptions;
   $('#container').highcharts(json);  
});
$(document).ready(function(){
		$("#Dian1").mouseenter(function(){
			$(this).css({"color":"#90ED7D"});
			$(".Dian:eq(0)").addClass("DianF");
		});
		$("#Dian1").mouseleave(function(){
			$(this).css({"color":"white"});
			$(".Dian:eq(0)").removeClass("DianF");
		});
		
		$("#Dian2").mouseenter(function(){
			$(this).css({"color":"#90ED7D"});
			$(".Dian:eq(1)").addClass("DianF");
		});
		$("#Dian2").mouseleave(function(){
			$(this).css({"color":"white"});
			$(".Dian:eq(1)").removeClass("DianF");
		});
});