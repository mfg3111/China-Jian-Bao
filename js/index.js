$(function(){
	$('.nav ul li').hover(function(){
		$(this).find('.hides').stop(true).slideDown(300);
	},function(){
		$(this).find('.hides').stop(true).slideUp(200);
	})

	// 中间class1_c的选项卡
		var c;
	$('.class1_c ul a').hover(function(){
		c = $(this).index();
		$(this).attr('class','active1').siblings('a').attr('class','');
		$('.class1_c .class1_c_box').eq(c).css('display','block').siblings('.class1_c_box').css('display','none');
	})




	// 左边的class1_l选项卡
	var timer;
	var c=0;
	$('.class1_l ul li').mouseenter(function(){
		clearInterval(timer);
			c = $(this).index();
			$(this).attr('class','active2').siblings('li').attr('class','');
			$('.class1_l .con').eq(c).css('display','block').siblings('.con').css('display','none');
	})
	$('.class1_l').mouseenter(function(){
		clearInterval(timer);
	})
	$('.class1_l').mouseleave(function(){
		 timer = setInterval(dsq,1000);
	})

	function dsq(){
		c++;
		if(c==4){
			c=0;
		}
		$('.class1_l ul li').eq(c).attr('class','active2').siblings('li').attr('class','');
			$('.class1_l .con').eq(c).css('display','block').siblings('.con').css('display','none');
	}
	 timer = setInterval(dsq,1000);


	// class1_c_box的特效
	$('.class1_c_box p').mouseenter(function(){
		$('.class1_c_box p').siblings('.hide').css('display','none');
		$(this).parent('.list').next('.list').find('.hide').css('display','block');
	})





	// 第三类选项卡
	$('.class3 h3 a').mouseenter(function(){
		c = $(this).index();
		$(this).attr('class','active3').siblings('a').attr('class','');
		$('.class3_l .con').eq(c).css('display','block').siblings('.con').css('display','none');
	})






























})




















