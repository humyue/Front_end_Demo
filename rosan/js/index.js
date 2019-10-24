$(function(){
	var i=0;
	var timer;
	// $(".info").mouseover(function(){
	// 	$(this).find(".info_sec").show();
	// })
	// $(".info").mouseout(function(){
	// 	$(this).find(".info_sec").hide();
	// })
	//用jquery方法设置第一张图片显示，其余隐藏
	$('.ig').eq(0).show().siblings('.ig').hide();
	//调用showTime()函数（轮播函数）
	Show(0);
	showTime();
	//当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
	$('.tab').hover(function(){
	   //获取当前i的值，并显示，同时还要清除定时器
	   i = $(this).index();
	   Show(i);
	   clearInterval(timer);
	},function(){
	    //
	   showTime();
	});
		//创建一个showTime函数
	function showTime(){
	  	//定时器
	  	timer = setInterval(function(){
		  //调用一个show()函数
		  i++;
		  i%=5
		  Show(i);
		},2500);
	}
	//创建一个Show函数
	function Show(index){
	  //在这里可以用其他jquery的动画
	  
	  $('.ig').eq(index).fadeIn(300);
	  $('.ig').eq(index).siblings('.ig').fadeOut(300);
	  $('.ig').eq(index).show().siblings('.ig').hide(); 
	  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
	  $('.tab').eq(index).addClass('cur').siblings('.tab').removeClass('cur');
	}

	// 回到顶部
	$(window).scroll(function(){
		if($(this).scrollTop()>50){
			$("#gotop").fadeIn(400);
		}else{
			$("#gotop").fadeOut(400);
		}
	});
	
	$("#gotop").click(function(){
		$("body,html").animate({
			scrollTop:0
		},500)
	});
})
