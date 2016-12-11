$(function(){
	//导航栏吸顶设置
	var flag = 0;
	window.addEventListener("scroll",function(){
		var h = $("#nav").height();
		var top = $("#nav").offset().top;
		var top_one = $(".box_one").offset().top;
		var top_five = $(".box_five").offset().top;
		var top_ten = $(".box_ten").offset().top;
		var top_fifty = $(".box_fifty").offset().top;
		if(flag == 0){
			if($(document).scrollTop() >= top){
				$("#nav_c").css({
					"position":"fixed",
					"top":0,
					"display":"block"
				});
				
				$("#nav_c .nav_title").eq(0).css({
						"height":"1.7rem",
						"border-bottom":"0.1rem solid red"
					}).siblings("li").css({
						"height":"1.8rem",
						"border-bottom":"0"
					})
				
				if($(document).scrollTop() >= top_five-h-15){
					$("#nav_c .nav_title").eq(1).css({
						"height":"1.7rem",
						"border-bottom":"0.1rem solid red"
					}).siblings("li").css({
						"height":"1.8rem",
						"border-bottom":"0"
					})
				}
				if($(document).scrollTop() >= top_ten-h-15){
					$("#nav_c .nav_title").eq(2).css({
						"height":"1.7rem",
						"border-bottom":"0.1rem solid red"
					}).siblings("li").css({
						"height":"1.8rem",
						"border-bottom":"0"
					})
				}
				if($(document).scrollTop() >= top_fifty-h-15){
					$("#nav_c .nav_title").eq(3).css({
						"height":"1.7rem",
						"border-bottom":"0.1rem solid red"
					}).siblings("li").css({
						"height":"1.8rem",
						"border-bottom":"0"
					})
				}
				
			}else{
				$("#nav_c").css("display","none");
				$(".nav_title").css({
						"height":"1.8rem",
						"border-bottom":"0"
					})
			}
		}
		
	});
	
	
	
	
	
	
	$(".nav_title").on("click",function(){
		flag = 1;
		$(this).css({
			"height":"1.7rem",
			"border-bottom":"0.1rem solid red"
		}).siblings("li").css({
			"height":"2rem",
			"border-bottom":"0"
		})
		var index = $(this).attr("index");
		var sc_top = $("."+index).offset().top - $("#nav").height();
		$("html,body").animate({scrollTop:sc_top},500,function(){
			flag = 0;
		});
	})
	
	//顶部轮播图
	var mySwiper = new Swiper ('.swiper-container', {
		loop:true,
		autoplay:2000,
		speed:1000,
		pagination: '.swiper-pagination'
	})
})





