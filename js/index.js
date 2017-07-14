$(function(){


	//选项卡的切换
	(function(){
		$('#top a').click(function(){
			var index = $(this).index();
			$('#top a').removeClass('active');
			$('#bottom .block').removeClass('now');
			$('#top a').eq(index).addClass('active');
			$('#bottom .block').eq(index).addClass('now');
		});
	})();

	//首页主轮播
	(function(){
	var oDiv = $('#banner');
	var aUlLi = oDiv.find('ul li');
	var aSpan = oDiv.find('span');
	var timer = null;
	var iNow = 0;
	var prev = oDiv.find('.prev');
	var next = oDiv.find('.next');

	fnFade();
	autoPlay();

	next.click(function(){
		iNow ++;
		if (iNow > aSpan.length - 1) {
			iNow = 0;
		}
		fnFade();
	});	
	prev.click(function(){
		iNow --;
		if (iNow < 0) {
			iNow = aSpan.length - 1;
		}
		fnFade();
	});
	aSpan.click(function(){
		iNow = $(this).index();
		fnFade();
	});
	oDiv.hover(function(){
		clearInterval(timer);
	}, autoPlay);
	function autoPlay (){
		timer = setInterval(function(){
			iNow ++;
			iNow %= aUlLi.length;
			fnFade();
		}, 3000);
	}
	function fnFade (){
		aUlLi.each(function(i){
			if (i != iNow) {
				aUlLi.eq(i).fadeOut().css('z-index', 1);
				aSpan.eq(i).removeClass('active');
			}else{
				aUlLi.eq(i).fadeIn().css('z-index', 2);
				aSpan.eq(i).addClass('active');
			}
		});
	};
	})();

	//轮播1
	(function(){
		var banner = $('#dinner');
		var bannerUl = banner.find('ul li');
		var arrayA = ['中文菜品名字1','中文菜品名字2','中文菜品名字3','中文菜品名字4'];
		var arrayB = ['英文菜品1','英文菜品2','英文菜品3','英文菜品4'];
		var oPA = banner.find('.span1');
		var oPB = banner.find('.span2');
		var timer = null;
		var index = 0;
		var prev = banner.find('.prev');
		var next = banner.find('.next');

		fnFade();
		autoPlay();

		next.click(function(){
			index ++;
			if (index > arrayA.length - 1) {
				index = 0;
			}
			fnFade();
		});	
		prev.click(function(){
			index --;
			if (index < 0) {
				index = arrayA.length - 1;
			}
			fnFade();
		});
		banner.hover(function(){
			clearInterval(timer);
		}, autoPlay);
		function autoPlay (){
			timer = setInterval(function(){
				index ++;
				index %= arrayA.length;
				fnFade();
			}, 3000);
		}
		function fnFade (){
			bannerUl.each(function(i){
				if ( i != index ) {
					bannerUl.eq(i).fadeOut().css('z-index', 1);
				}else{
					bannerUl.eq(i).fadeIn().css('z-index', 2);
				}
			});
			oPA.text(arrayA[index]);
			oPB.text(arrayB[index]);
		};

	})();


	//轮播2
	(function(){
		var banner = $('#din');
		var bannerUl = banner.find('ul li');
		var arrayA = ['中文菜品名字1','中文菜品名字2','中文菜品名字3','中文菜品名字4'];
		var arrayB = ['英文菜品1','英文菜品2','英文菜品3','英文菜品4'];
		var oPA = banner.find('.span1');
		var oPB = banner.find('.span2');
		var timer = null;
		var index = 0;
		var prev = banner.find('.prev');
		var next = banner.find('.next');

		fnFade();
		autoPlay();

		next.click(function(){
			index ++;
			if (index > arrayA.length - 1) {
				index = 0;
			}
			fnFade();
		});	
		prev.click(function(){
			index --;
			if (index < 0) {
				index = arrayA.length - 1;
			}
			fnFade();
		});
		banner.hover(function(){
			clearInterval(timer);
		}, autoPlay);
		function autoPlay (){
			timer = setInterval(function(){
				index ++;
				index %= arrayA.length;
				fnFade();
			}, 3000);
		}
		function fnFade (){
			bannerUl.each(function(i){
				if ( i != index ) {
					bannerUl.eq(i).fadeOut().css('z-index', 1);
				}else{
					bannerUl.eq(i).fadeIn().css('z-index', 2);
				}
			});
			oPA.text(arrayA[index]);
			oPB.text(arrayB[index]);
		};

	})();
});








/*
		//首页主轮播
			var len = $('.imglist li').length;
			var bannerWidth = $('#banner').width();
			var timer = null;
			var num = 0;

			var oFirst = $('.imglist li').eq(len - 1).prop('outerHTML');
			var oLast = $('.imglist li').eq(0).prop('outerHTML');
			$('.imglist').append($(oLast));
			$('.imglist').prepend($(oFirst));

			$('.imglist').width($('.imglist li').length * bannerWidth + 'px');
			$('.imglist').css('left', -bannerWidth + 'px');

			function slide (direction) {
            var direction = direction || 1 ;
            if (direction === 1) {
              if (num >= len - 1) {
                $('.imglist').stop(true, true).animate({left: '-=' + bannerWidth}, 400, function () {
                  $('.imglist').css('left', -bannerWidth + 'px');
                });
                num = 0;
              } else {
                $('.imglist').stop(true, true).animate({left: '-=' + bannerWidth}, 400);
                num++;
              }
            } else {
              if (num <= 0) {
                $('.imglist').stop(true, true).animate({left: '+=' + bannerWidth}, 400, function () {
                  $('.imglist').css('left', -len * bannerWidth + 'px');
                });
                num = len - 1;
              } else {
                $('.imglist').stop(true, true).animate({left: '+=' + bannerWidth}, 400);
                num--;
              }
            }
            tabSmallimgList();
          }
           // 自动轮播
          timer = setInterval(function () {
            slide();
          }, 2000)

          // 悬停切换
          $('#banner').hover(function () {
            clearInterval(timer);
          }, function () {
            timer = setInterval(function () {
              slide();
            }, 2000)
          })
          // 切换小图
          function tabSmallimgList () {
            $('.banner_dot span').removeClass('active');
            $('.banner_dot span').eq(num).addClass('active');
          }
          // 小图切换
          $('.banner_dot span').mouseover(function () {
            var index = $(this).index();
            num = index;
            $('.imglist').stop(true, true).animate({left: -(num + 1) * bannerWidth}, 400);
            tabSmallimgList();
          })
          // 左右按钮切换
          $('#banner .prev').click(function () {
            slide(2);
          });
          $('#banner .next').click(function () {
            slide();
          })

	});*/