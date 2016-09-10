(function Animate(){
	$(".right .ct").mouseenter(function(){
		$(this).find("i").css("transform","rotate(180deg)").css("transition","transform .5s")
	}).mouseleave(function(){
		$(this).find("i").css("transform","rotate(0deg)").css("transition","transform .5s")
	})

	$(".right .tc").mouseenter(function(){
		$(this).find("i").css("transform","rotate(180deg)").css("transition","transform .5s")
	}).mouseleave(function(){
		$(this).find("i").css("transform","rotate(0deg)").css("transition","transform .5s")
	})

	$(".rssj1").find("i").click(function(){
		if(parseInt($(".rssj1").find(".rssj2").css("height")) > 120){
			$(".rssj1").find(".rssj2").css("height","120px")
		}else{
			$(".rssj1").find(".rssj2").css("height","343px")
		}
	})

	$(".home-box").eq(1).find(".home-box1").find("a").eq(11).mouseenter(function(){
		$(this).css("color","rgb(41,191,179)")
	}).mouseleave(function(){
		$(this).css("color","")
	})
	$(".home-box").eq(4).find(".home-box1").find("a").eq(11).mouseenter(function(){
		$(this).css("color","rgb(41,191,179)")
	}).mouseleave(function(){
		$(this).css("color","")
	})

	$(".fixedDiv .dh").click(function(){
		$("html,body").animate({scrollTop:0},500);
	})

	$(".fixedDiv .fixedI_1").click(function(){
		$(".fixedDiv1").css("display","block");
		$("html body").css("overflow","hidden")
	})

	$(".fixedDiv2 .fixedDiv3").find("span").click(function(){
		$(".fixedDiv1").css("display","none");
		$("html body").css("overflow","")
	})

	$(".main3 .aDiv").click(function(){
		$(this).removeClass("bb").removeClass("aa").removeClass("hov");
		$(".main3 .bDiv").removeClass("bb").removeClass("aa").removeClass("hov");
		$(this).addClass("bb");
		$(".main3 .bDiv").addClass("aa");
		$(".main4.one").css("display","block");
		$(".main4.two").css("display","none");
	})
	$(".main3 .bDiv").click(function(){
		$(this).removeClass("bb").removeClass("aa").removeClass("hov");
		$(".main3 .aDiv").removeClass("bb").removeClass("aa").removeClass("hov");
		$(this).addClass("bb");
		$(".main3 .aDiv").addClass("aa");
		$(".main4.one").css("display","none");
		$(".main4.two").css("display","block");
	})
	

	$(".main4.two .txt1 span").mouseenter(function(){
		$(".main4.two .bigDiv").animate({opacity:0},500);
		$(".main4.two .bigDiv1").animate({opacity:1},500);
	}).mouseleave(function(){
		$(".main4.two .bigDiv").animate({opacity:1},500);
		$(".main4.two .bigDiv1").animate({opacity:0},500);
	})
})();
	
