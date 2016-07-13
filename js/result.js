$(function(){
	init();
	function init(){
		//content函数
		content();
		//c-main-good函数
		good();
		//c-main-bad函数
		bad();

	}
//content函数
function content(){
	//当点击c-con-more时，出现c-content-hide
	$("#c-con-more").on("click",function(){
		$('.c-main-content').hide();
		$(".c-content-hide").show();
		$('#c-header-back').show();
	})
	//当点击c-header-back时，返回c-main-content
	$("#c-header-back").on("click",function(){
		$('.c-main-content').show();
		$(".c-content-hide").hide();
		$('#c-header-back').hide();
	})
	//当点击c-read-content时，出现c-hide-bottom
	$(".c-read-content").on("click",function(){
		$(".c-hide-bottom").slideToggle(1000);
		$(this).find("em").toggleClass("c-style");
		$(this).find("i").text("收起");
		/*if($(".c-hide-bottom").is(':hidden')){
             $(this).find("i").text("阅读全文");
		}*/
		/*if($(this).find("i").text("收起")){
			$(".c-hide-bottom").hide();
		}else{
			$(".c-hide-bottom").show();
		}*/

	})
};

//c-main-good函数
function good(){
	//当点击c-good-more时，出现c-good-hide
	$(".c-good-more").on("click",function(){
		 $('.c-good-hide').toggleClass("c-on");
		 $(this).toggleClass('c-bg');
    })
};

//c-main-bad函数
function bad(){
	//当点击c-good-more时，出现c-good-hide
	$(".c-bad-more").on("click",function(){
		 $('.c-bad-hide').toggleClass("c-on");
		 $(this).toggleClass('c-bg');
    })
};
})