$(function(){
	//选项卡的切换
	(function(){
		$('#content .zuo').click(function(){
			var index = $(this).index();
			$('#content .zuo').removeClass('active');
			$('#content .xuan').removeClass('active');
			$('#content .zuo').eq(index).addClass('active');
			$('#content .xuan').eq(index).addClass('active');
		});
	})();

});