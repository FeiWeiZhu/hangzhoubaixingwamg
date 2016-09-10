$(function(){
	var	ts2 = $(".ts2"),
		ts3 = $(".ts3"),
		buttons = $(".ts4 i"),
		prev = $("#prev"),
		next = $("#next"),
		index = 1,
		len = 3,
		inetrval = 3000,
		timer;
	
	function animate(offset){
		var left = parseInt(ts3.css("left")) + offset;
		if(offset > 0){
			offset = "+=" + offset;
		}
		else{
			offset = "-=" + Math.abs(offset);
		}
		ts3.animate({"left":offset},300,function(){
			if(left > -63){
				ts3.css("left", -188 * len);
			}
			if(left < (-188 * len)){
				ts3.css("left",-188);
			}
		});
	}

	function showButton(){
		buttons.eq(index-1).addClass("on").siblings().removeClass("on");
	}

	function play(){
		timer = setTimeout(function(){//setTimeout:定时器
			next.trigger("click");
			play();
		},inetrval);//inetrval：时间间隔的字符串表达式
	}

	function stop(){
		clearTimeout(timer);
	}

	next.bind("click",function(){
		if(ts3.is(":animated")){
			return;
		}
		if(index == 3){
			index = 1;
		}
		else{
			index++;
		}
		animate(-188);
		showButton();
	})

	prev.bind("click",function(){
		if(ts3.is(":animated")){
			return;
		}
		if(index == 1){
			index = 3;
		}
		else{
			index--;
		}
		animate(188);
		showButton();
	})

	buttons.each(function(){
		$(this).bind("click",function(){
			if(ts3.is(":animated") || $(this).attr("class")=="on"){
				return;
			}
			var myIndex = parseInt($(this).attr("index"));
			var offset = -188 * (myIndex - index);

			animate(offset);
			index = myIndex;
			showButton();
		})
	});
	
	ts2.hover(stop,play);
	play();

});
