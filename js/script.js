$(function() {
	$(".loading").delay(1000).fadeOut();
	
	var $skill = $("#skill"),
			$offset = 500,
			$skillOST = $skill.offset().top - $offset;
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > $skillOST) {
			$skill.find('li').eq(0).addClass('on');
			$skill.find('li').eq(1).delay(200).queue(function() {
				$(this).addClass('on');
			});
			$skill.find('li').eq(2).delay(400).queue(function() {
				$(this).addClass('on');
			});
			$skill.find('li').eq(3).delay(700).queue(function() {
				$(this).addClass('on');
			});
			$skill.find('li').eq(4).delay(900).queue(function() {
				$(this).addClass('on');
			});
			$skill.find('li').eq(5).delay(1100).queue(function() {
				$(this).addClass('on');
			});
		};
	});
var swiper = new Swiper(".portSlide", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "<i class=\"fas fa-heart\"></i></span>";
          },
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
      });
	
	
});