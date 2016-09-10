var data = {"code":0,"data":[{"lable":"担保贷款"},{"lable":"投资理财"},{"lable":"财务会计"},{"lable":"公司注册"},{"lable":"律师服务"},{"lable":"保险服务"},{"lable":"展览展会"},{"lable":"印刷包装"},{"lable":"喷绘招牌"},{"lable":"广告媒体"},{"lable":"设计策划"},{"lable":"网站建设"},{"lable":"网络布线"},{"lable":"庆典演出"},{"lable":"设备租赁"},{"lable":"设备维修"},{"lable":"工业设备"},{"lable":"快递服务"},{"lable":"货运物流"},{"lable":"农林牧副渔"},{"lable":"物品批发"},{"lable":"工业机械"},{"lable":"礼品定制"},{"lable":"餐饮美食"},{"lable":"代运营/托管"},{"lable":"翻译服务"},{"lable":"速记服务"}],"message":"success"},
	data = data.data,
	logo = [{"imgSrc":"../../image/5.png","title":"交友活动","lab":"(32623)"},{"imgSrc":"../../image/6.png","title":"宠物之家","lab":"(87261)"},{"imgSrc":"../../image/3.png","title":"房屋租售","lab":"(2549961)"},{"imgSrc":"../../image/7.png","title":"教育培训","lab":"(182263)"},{"imgSrc":"../../image/4.png","title":"兼职学习","lab":"(83296)"}],
	lit = [{"lable":"同城交友"},{"lable":"找女朋友"},{"lable":"同城征婚"},{"lable":"婚介服务"},{"lable":"同城活动"},{"lable":"技能交换"},{"lable":"找人寻物"},{"lable":"拼车顺风车"},{"lable":"视频交友"},{"lable":"交友交流群"},{"lable":"异地交友"},{"lable":"异地征婚"},{"lable":"宠物狗狗"},{"lable":"宠物猫猫"},{"lable":"宠物服务"},{"lable":"宠物配种"},{"lable":"用品食品"},{"lable":"宠物赠送"},{"lable":"其他宠物"},{"lable":"寻宠启事"},{"lable":"泰迪狗狗"},{"lable":"萨摩耶狗"},{"lable":"宠物医院"},{"lable":"更多"},{"lable":"房屋出租"},{"lable":"求租求购"},{"lable":"日租短租"},{"lable":"找室友合租"},{"lable":"新房出售"},{"lable":"二手房出售"},{"lable":"商铺出租"},{"lable":"商铺出售"},{"lable":"商铺转让"},{"lable":"写字楼出租"},{"lable":"写字楼出售"},{"lable":"厂房仓库"},{"lable":"家教机构"},{"lable":"家教个人"},{"lable":"职业技能"},{"lable":"外语培训"},{"lable":"学历教育"},{"lable":"电脑培训"},{"lable":"设计培训"},{"lable":"体育培训"},{"lable":"艺术培训"},{"lable":"幼儿培训"},{"lable":"出国留学"},{"lable":"移民服务"},{"lable":"学生兼职"},{"lable":"促销导购"},{"lable":"模特礼仪"},{"lable":"家教兼职"},{"lable":"传单派发"},{"lable":"兼职客服"},{"lable":"财务会计"},{"lable":"兼职演员"},{"lable":"充场座谈会"},{"lable":"兼职服务员"},{"lable":"展会活动"},{"lable":"更多"}];

function list(){
	for(var i = 0 ,dataLen = data.length; i < dataLen; i++){
		$(".home-col-2 .swfw1").append("<a>" + data[i].lable + "</a>")
	}	
}

function food(){
	for(var i = 0,logoLen = logo.length; i < logoLen; i++){
		$(".home_row.wwt").append("<div class=\"home-box\">"
										+"<a>"
											+"<i>"
												+"<img src=\"" + logo[i].imgSrc + "\" />"							
											+"</i>"
											+"<h1>" + logo[i].title + "</h1>"
											+"<span>" + logo[i].lab + "</span>"
										+"</a>"
										+"<div class=\"home-box1\">"
										+"</div>"
									+"</div>"
								)
	}
	for(var j = 0,a = 0;j < Math.ceil(lit.length/12);j++){
		for(var i = 0; i < 12; i++,a++){
			$(".home-box1").eq(j).append("<a>" + lit[a].lable + "</a>")
			if(a == lit.length){
				return;
			}
		}
	}
	
}

list();
food();