$.dialog=function (opt){
	var dft={
		info:"亲，我们为您准备了60道体质测试题，请耐心如实答题，获取真实体质结果",
		btn:"开始测试",
		hrefs:'',
		callback:null
	},
	set=$.extend({},dft,opt);

	//创建DOM
	var html='<div class="mask">'
				+'<div class="dialog">'
					+'<span class="close"></span>'
					+'<dl>'
						+'<dt><img src="img/k7.png"></dt>'
						+'<dd>'+set.info+'</dd>'
					+'</dl>'
					+'<p><a class="test_begin" href="'+set.hrefs+'">'+set.btn+'</a></p>'
				+'</div>'
			+'</div>';
	//追加到body中
	if($("body").find(".mask").length==0){
		$("body").append(html);
	}
	//点击.test_begin,执行的回调
	$(".mask .test_begin").on("click",function(){
		$(".mask").remove();
		//set.callback && set.callback();	
		
	})
	//点击关闭，移除mask
	$("body .mask .close").on("click",function(){
		$(".mask").remove();
	})

}