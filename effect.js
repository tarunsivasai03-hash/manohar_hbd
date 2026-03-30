$(window).on('load', function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;

		function getViewport() {
			return {
				w: $(window).width(),
				h: $(window).height()
			};
		}

		function getBalloonStep(width) {
			if (width <= 480) {
				return 42;
			}
			if (width <= 768) {
				return 55;
			}
			return 100;
		}

		function positionWishBalloons(duration) {
			var view = getViewport();
			var center = view.w / 2;
			var step = getBalloonStep(view.w);
			var topPos = view.w <= 768 ? Math.max(140, Math.floor(view.h * 0.33)) : 240;
			var ids = ['#b11', '#b22', '#b33', '#b44', '#b55', '#b66', '#b77'];
			var offsets = [-3, -2, -1, 0, 1, 2, 3];

			ids.forEach(function(id, index) {
				if ($(id).length) {
					$(id).animate({top: topPos, left: center + (offsets[index] * step)}, duration);
				}
			});
		}

		function getRandomBalloonPosition() {
			var view = getViewport();
			return {
				left: Math.max(0, view.w - 120) * Math.random(),
				bottom: Math.max(160, view.h - 240) * Math.random()
			};
		}

		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			positionWishBalloons(300);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randPos = getRandomBalloonPosition();
		$('#b1').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randPos = getRandomBalloonPosition();
		$('#b2').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randPos = getRandomBalloonPosition();
		$('#b3').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randPos = getRandomBalloonPosition();
		$('#b4').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randPos = getRandomBalloonPosition();
		$('#b5').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randPos = getRandomBalloonPosition();
		$('#b6').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randPos = getRandomBalloonPosition();
		$('#b7').animate({left:randPos.left,bottom:randPos.bottom},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		positionWishBalloons(500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('#final_video').hide();
		$('#video_hint').hide();
		$('#bob_video').each(function(){
			this.pause();
			this.currentTime = 0;
		});
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});

		var $messageLines = $('.message p');
		$messageLines.hide();

		function endSequenceWithVideo() {
			$('.message, .cake, .cake-cover, .balloons, .balloon-border, .bannar, .bulb-holder, .navbar-fixed-bottom').fadeOut('fast');
			$('#final_video').fadeIn('slow', function(){
				var finalVideo = $('#bob_video')[0];
				if (finalVideo) {
					finalVideo.muted = true;
					finalVideo.setAttribute('muted', 'muted');
					finalVideo.load();
					finalVideo.play().then(function() {
						setTimeout(function(){
							finalVideo.muted = false;
							finalVideo.removeAttribute('muted');
						}, 600);
					}).catch(function() {
						$('#video_hint').fadeIn('slow');
					});
				}
			});
		}

		function showMessageLine(index) {
			if (index >= $messageLines.length) {
				endSequenceWithVideo();
				return;
			}

			$messageLines.eq(index)
				.fadeIn('slow')
				.delay(1200)
				.fadeOut('slow', function(){
					showMessageLine(index + 1);
				});
		}

		showMessageLine(0);
		
	});
});




//alert('hello');